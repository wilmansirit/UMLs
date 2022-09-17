import { Registros } from "../prestamosPorLectorInteface";
import { Autor } from "./Autor";
import { Copia } from "./Copia";
import { Lector } from "./Lector";
import { Prestamo } from "./Prestamo";
import { ResponseMessage } from "./ResponseMessage";
import { TipoLibro } from "./TipoLibro";

export class Biblioteca {
  private NUMERO_MAX_PRESTAMOS = 3;
  private NUMERO_MAX_DIAS = 30;
  private DIAS_DE_MULTA = 2;
  private NUMERO_MAX_COPIAS = 3;

  public nombreBiblioteca: string;
  private copias: Copia[] = [];
  private prestamos: Prestamo[] = [];
  private lectores: Lector[] = [];

  constructor(nombreBiblioteca: string) {
    this.nombreBiblioteca = nombreBiblioteca;
  }

  public inscribirLector(
    id: string,
    nombreCompleto: string,
    edad: number
  ): Lector {
    const nuevoLector = new Lector(id, nombreCompleto, edad);
    this.lectores.push(nuevoLector);
    return nuevoLector;
  }

  public crearCopias(
    ISBN: string,
    nombreLibro: string,
    editorial: string,
    anio: number,
    autor: Autor,
    tipoLibro: TipoLibro
  ): ResponseMessage {
    for (let i = 1; i <= this.NUMERO_MAX_COPIAS; i++) {
      let idCopia = ISBN + "-CP00" + i;
      const nuevaCopia = new Copia(
        ISBN,
        nombreLibro,
        editorial,
        anio,
        autor,
        tipoLibro,
        "EN_BIBLIOTECA",
        idCopia
      );
      this.copias.push(nuevaCopia);
    }

    return { message: `Creadas 3 copias del libro ${nombreLibro}` };
  }

  public traerCopias(): Copia[] {
    return this.copias;
  }

  public buscarLectorPorId(idLector: string): Lector | null {
    return this.lectores.filter((lector) => lector.id === idLector)[0];
  }

  private buscarCopiaPorId(idCopia: string): Copia | null {
    return this.copias.filter((copia) => copia.getIdCopia === idCopia)[0];
  }

  public prestarLibro(idLector: string, idCopia: string, fechaDelPrestamo:string): ResponseMessage {
    const lector = this.buscarLectorPorId(idLector);
    const copia = this.buscarCopiaPorId(idCopia);

    if (!lector || !copia)
      return { message: "Revisar id de la Copia o id del Lector" };
    if (copia.getEstatusCopia != "EN_BIBLIOTECA")
      return { message: "La copia no esta disponible" };
    if (!lector.estaSolvente) return { message: "El Lector no está solvente" };
    if (lector.numeroCopiasPrestadasActualmente() >= this.NUMERO_MAX_COPIAS) {
      return {
        message: `La copia "${copia.getIdCopia}" no puede ser prestada. El lector "${lector.id}" excede el numero de prestamos`,
      };
    }

    // Calcular fechas de prestamos y de devolucion
    const fechaPrestamo = new Date(fechaDelPrestamo);
    const fechaDevolucion = this.sumarDias(fechaPrestamo, this.NUMERO_MAX_DIAS);

    // Cambiar status de las copias
    copia.cambiarEstatusCopia = "PRESTADA";

    // Ingresar prestamo
    const nuevoPrestamo = new Prestamo(
      lector,
      copia,
      fechaPrestamo,
      fechaDevolucion
    );
    this.prestamos.push(nuevoPrestamo);

    lector.registrarPrestamoLector({
      idCopia: idCopia,
      nombreCopia: copia.getNombreLibro,
      fechaPrestamo: fechaPrestamo.toLocaleDateString(),
      fechaDevolucion: fechaDevolucion.toLocaleDateString(),
      estatusCopia: "PRESTADA",
    });

    return {
      message: `La copia ${copia.getIdCopia} del libro: "${copia.getNombreLibro}" fue asignada al lector: "${lector.nombresApellidos}"`,
    };
  }

  public mostrarPrestamos(): void {
    this.prestamos.forEach((prestamo) => {
      console.log(JSON.stringify(prestamo));
    });
  }

  private verificarSolvencia(prestamo: Prestamo) {
      
      
      const today = new Date();
      
      const diasRestantes = this.NUMERO_MAX_DIAS - (Math.round((today.getTime() - prestamo.fechaPrestamo.getTime()) / (1000 * 60 * 60 * 24 ))); //-> milisegundos -> segundos -> minutos -> horas
      
      if (diasRestantes < 0) {
          prestamo.getLector.estaSolvente = false;
          const diasDeMulta = Math.abs(this.DIAS_DE_MULTA * diasRestantes);
          
          // Multado has el dia...

          if (prestamo.getLector.multadoHastaEl.getTime() < this.sumarDias(today, diasDeMulta).getTime()) {
              prestamo.getLector.multadoHastaEl = this.sumarDias(today, diasDeMulta);            
          }
          console.log(prestamo.getLector.multadoHastaEl < this.sumarDias(today, diasDeMulta))
        }
        
  }

  public devolverLibro(idCopia: string): ResponseMessage {
    const prestamo = this.prestamos.filter(
      (item) => item.getIdCopia === idCopia
    )[0];
    if (!prestamo) return { message: "Revise el numero de la copia..!" };

    // Actualizar registros en el lector
    this.verificarSolvencia(prestamo);
    prestamo.getLector.devolverCopia(idCopia);

    // Cambiar el estatus de la copia en biblioteca y elimarlo de los registros de prestamos.
    prestamo.getCopia.cambiarEstatusCopia = "EN_BIBLIOTECA";
    this.prestamos = this.prestamos.filter(
      (item) => item.getIdCopia != idCopia
    );

    return {
      message: `La devolución de la copia ${idCopia} fue procesada correctamente`,
    };
  }

  public repararCopia(idCopia: string): ResponseMessage {
    let copia = this.buscarCopiaPorId(idCopia);

    if (copia) {
      if (copia.getEstatusCopia != "EN_BIBLIOTECA")
        return { message: "La copia debe estar disponible" };
      copia.cambiarEstatusCopia = "EN_REPARACION";

      return {
        message: `La copia de "${copia.getIdCopia}" de ${copia.getNombreLibro} lista para enviar a reparar`,
      };
    } else {
      return { message: `Revisar el número de copia ${idCopia}` };
    }
  }

  private sumarDias(fecha: Date, dias: number): Date {

    const auxDate = new Date(fecha.toISOString())

    auxDate.setDate(fecha.getDate() + dias);

    return auxDate;
  }

  public quitarMulta(lector:Lector):ResponseMessage {

    lector.estaSolvente =true;
    lector.multadoHastaEl = new Date('12/31/1900');

    return {message: 'El lector ya esta solvente'}
  }

}

import { PrestamosPorLector, Registros } from "../prestamosPorLectorInteface"
import { Autor } from "./Autor"
import { Copia } from "./Copia"
import { Lector } from "./Lector"
import { Prestamo } from "./Prestamo"
import { ResponseMessage } from "./ResponseMessage"
import { TipoLibro } from "./TipoLibro"
 

export class Biblioteca {

    private NUMERO_MAX_PRESTAMOS = 3
    private NUMERO_MAX_DIAS = 30
    private DIAS_DE_MULTA = 2
    private NUMERO_MAX_COPIAS = 3

    public nombreBiblioteca:string;
    private registros:Registros[] = [];
    private copias:Copia[] = [];
    private prestamos:Prestamo[] = [];
    private lectores:Lector[] = [];

    constructor(nombreBiblioteca:string) {
        this.nombreBiblioteca = nombreBiblioteca;
    }

    public inscribirLector(id:string, nombreCompleto:string, edad:number):Lector {
        const nuevoLector = new Lector(id, nombreCompleto, edad);
        this.lectores.push( nuevoLector);
        return nuevoLector;
    }

    public crearCopias(ISBN:string, nombreLibro:string, editorial:string, anio:number, autor:Autor, tipoLibro:TipoLibro): ResponseMessage {

        for (let i = 1; i <= this.NUMERO_MAX_COPIAS; i++) {
            let idCopia = ISBN + "-CP00" + i
            const nuevaCopia = new Copia(ISBN, nombreLibro, editorial, anio, autor, tipoLibro,"EN_BIBLIOTECA",idCopia);
            this.copias.push(nuevaCopia);
        }

        return {"message": `Creadas 3 copias del libro ${nombreLibro}`}
    }

    public traerCopias(): Copia[] {
        return this.copias
    }

    private buscarLectorPorId(idLector: string): Lector | null {

        return this.lectores.filter(lector => lector.id === idLector)[0];

    }

    private buscarCopiaPorId(idCopia:string): Copia | null {

        return this.copias.filter(copia =>  copia.getIdCopia === idCopia)[0];

    }

    public prestarLibro(idLector: string, idCopia:string): ResponseMessage {

        const lector = this.buscarLectorPorId(idLector)
        const copia = this.buscarCopiaPorId(idCopia);

        if(!lector || !copia || copia.getEstatusCopia != "EN_BIBLIOTECA") {
            return {message: 'La copia no esta disponible'} 
        }

        if (lector.numeroCopias > this.NUMERO_MAX_COPIAS) {
            return {message: `La copia "${copia.getIdCopia}" no puede ser prestada. El lector "${lector.id}" excede el numero de prestamos`};
        }

        const hoy = new Date();
        const fechaDevolucion = hoy;

        copia.cambiarEstatusCopia = 'PRESTADA';
        const nuevoPrestamo = new Prestamo(lector, copia, hoy, fechaDevolucion);
        this.prestamos.push(nuevoPrestamo);
        
        const prestamo:PrestamosPorLector = {
                                            idCopia: idCopia,
                                            nombreCopia: copia.getNombreLibro,
                                            fechaPrestamo: hoy.toLocaleDateString(),
                                            fechaDevolucion: fechaDevolucion.toLocaleDateString(),
                                            estatusCopia: 'PRESTADA'
        }

        return {message: `La copia ${copia.getIdCopia} del libro: "${copia.getNombreLibro}" fue asignada al lector: "${lector.nombresApellidos}"`}

    }

    public mostrarPrestamos(): void {
        this.prestamos.forEach(prestamo => {
            console.log(JSON.stringify(prestamo));
        })
    }

    // // private calcularDiasDePrestamo():number {


    // // }
    // // private calcularMulta():number {


    // // }

    // public devolverLibro(idCopia:string): ResponseMessage { 

    //     const copiaDevuelta = this.prestamos.filter(item => item.getIdCopia === idCopia)[0];
    //     if (!copiaDevuelta) return {message: 'Revise el numero de la copia..!'};

    //     copiaDevuelta.getCopia.cambiarEstatusCopia = 'EN_BIBLIOTECA';
    //     this.prestamos =  this.prestamos.filter(item => item.getIdCopia != idCopia);

    //     copiaDevuelta.getLector.devolverPrestamo(idCopia);

    //     return {message: `La devolución de la copia ${idCopia} fue procesada correctamente`};

    // }

    public repararCopia(idCopia: string): ResponseMessage {

        let copia = this.buscarCopiaPorId(idCopia);
        
        if (copia) {
            if (copia.getEstatusCopia != "EN_BIBLIOTECA") return {message: 'La copia debe estar disponible'};
            copia.cambiarEstatusCopia = "EN_REPARACION";
            // TODO
            // this.registros.push(copia);
            return {message: `La copia de "${copia.getIdCopia}" de ${copia.getNombreLibro} lista para enviar a reparar` };
        } else {
            return {message: `Revisar el número de copia ${idCopia}`};
        }        
    }

    public mostrarRegistros() {
        this.registros.forEach(item => console.log(item))
    }

}
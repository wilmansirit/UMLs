import { Autor } from "./Autor"
import { Copia } from "./Copia"
import { Lector } from "./Lector"
import { Libro } from "./Libro"
import { Prestamo } from "./Prestamo"
import { ResponseMessage } from "./ResponseMessage"
import { TipoLibro } from "./TipoLibro"

 

export class Biblioteca {

    private NUMERO_MAX_PRESTAMOS = 3
    private NUMERO_MAX_DIAS = 30
    private DIAS_DE_MULTA = 2
    private NUMERO_MAX_COPIAS = 3
    private registros:any[] = [];
    public nombreBiblioteca:string;

    private copias:Copia[] = [];
    private prestamos:Prestamo[] = [];
    private lectores:Lector[] = [];

    constructor(nombreBiblioteca:string) {
        this.nombreBiblioteca = nombreBiblioteca;
    }

    public agregarLector(lector: Lector):ResponseMessage {

        this.lectores.push(lector);
        return {'message': "OK"};

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

        return this.lectores.filter(lector => lector.idLector === idLector)[0];

    }

    // private buscarCopiaPorId(idCopia:string): Copia | null {

    //     return this.copias.filter(copia =>  === idCopia)[0];

    // }

    // public prestarLibro(idLector: string, idCopia:string): ResponseMessage {

    //     const lector = this.buscarLectorPorId(idLector);
    //     const copia = this.buscarCopiaPorId(idCopia);

    //     if(lector && copia) {

    //         const hoy = new Date();
    //         const fechaDevolucion = new Date('09/30/2022');

    //         if(copia.getEstatusCopia === 'EN_BIBLIOTECA'){
    //             copia.cambiarEstatusCopia = 'PRESTADA';
    //             const nuevoPrestamo = new Prestamo(lector, copia, hoy, fechaDevolucion);
    //             this.prestamos.push(nuevoPrestamo);
    //             this.registros.push(nuevoPrestamo);

    //             return {message: `La copia de libro "${copia.getLibro.getNombreLibro}" fue asignada a "${lector.getNombreLector}"`}

    //         } else {
    //             return {message: 'La copia no esta disponible'}
    //         }
    //     } else {
    //         return {message: 'La copia no esta disponible'}
    //     }
    // }

    // public mostrarPrestamos(): Prestamo[] {
    //     return this.prestamos
    // }

    // // private calcularDiasDePrestamo():number {


    // // }
    // // private calcularMulta():number {


    // // }
    // // private devolverLibro(Prestamo):string{ 

    // // }

    // public repararCopia(idCopia: string): ResponsMessage {

    //     let copia = this.buscarCopiaPorId(idCopia);
        
    //     if (copia) {
    //         if (copia.getEstatusCopia != "EN_BIBLIOTECA") return {message: 'La copia debe estar disponible'};
    //         copia.cambiarEstatusCopia = "EN_REPARACION";
    //         this.registros.push(copia);
    //         return {message: `La copia de "${copia.getIdCopia}" de ${copia.getLibro.getNombreLibro} lista para enviar a reparar` };
    //     } else {
    //         return {message: `Revisar el número de copia ${idCopia}`};
    //     }        
    // }

    // public mostrarRegistros() {
    //     this.registros.forEach(item => console.log(item))
    // }

}
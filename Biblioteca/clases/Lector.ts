import { PrestamosPorLector } from "../prestamosPorLectorInteface";
import { Persona } from "./Persona";


export class Lector extends Persona {

    private _estaSolvente:boolean;
    private _prestamos: PrestamosPorLector[] = [];

    constructor(idPersona:string, nombrePersona:string, edad:number){
        super(idPersona, nombrePersona, edad);
        this._estaSolvente = true;
    }

    get estaSolvente(): boolean {
        return this._estaSolvente;
    }

    get registrosPrestamosPorLector(): PrestamosPorLector[] {
        return this._prestamos;
    }

    registrarPrestamoLector(prestamo:PrestamosPorLector) : void {
        this._prestamos.push(prestamo);
    }

    numeroCopiasPrestadasActualmente(): number {
        return this.registrosPrestamosPorLector.filter(item => item.estatusCopia === 'PRESTADA').length

    }

    // numeroDeCopiasBajoPrestamo(): number {

    //     let numeroCopias = 0;

    //     numeroCopias = this.registroDePrestamos.filter(prestamo => {

    //         return prestamo.estatusCopia === 'PRESTADA';

    //     }).length

    //     return numeroCopias;

    // }

    // devolverPrestamo(idCopia: string): void {

    //     const registro = this.registroDePrestamos.filter(item => item.idCopia === idCopia)[0];

    //     if(registro != undefined) {
    //         registro.estatusCopia = 'DEVUELTA';
    //         this.registroDePrestamos.push(registro);
    //     }

    // }
}
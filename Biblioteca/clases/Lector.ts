import { PrestamosPorLector } from "../prestamosPorLectorInteface";
import { Persona } from "./Persona";

export class Lector extends Persona {

    private _estaSolvente:boolean;
    private _registros: PrestamosPorLector[] = [];
    private _numeroCopias: number;

    constructor(idPersona:string, nombrePersona:string, edad:number){
        super(idPersona, nombrePersona, edad);
        this._estaSolvente = true;
        this._numeroCopias = 0;
    }

    get estaSolvente(): boolean {
        return this._estaSolvente;
    }

    get registros(): PrestamosPorLector[] {
        return this._registros;
    }

    get numeroCopias(): number {
        return this._numeroCopias;
    }

    set actualizarNumeroCopias(numeroCopias:number) {
        this._numeroCopias = numeroCopias
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
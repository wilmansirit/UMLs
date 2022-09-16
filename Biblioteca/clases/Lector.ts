import { PrestamosPorLector } from "../prestamosPorLectorInteface";
import { Persona } from "./Persona";


export class Lector extends Persona {

    private _estaSolvente:boolean;
    private _registrosDePrestamos: PrestamosPorLector[] = [];

    constructor(idPersona:string, nombrePersona:string, edad:number){
        super(idPersona, nombrePersona, edad);
        this._estaSolvente = true;
    }

    get estaSolvente(): boolean {
        return this._estaSolvente;
    }

    get registrosPrestamosPorLector(): PrestamosPorLector[] {
        return this._registrosDePrestamos;
    }

    registrarPrestamoLector(prestamo:PrestamosPorLector) : void {
        this._registrosDePrestamos.push(prestamo);
    }

    numeroCopiasPrestadasActualmente(): number {
        return this.registrosPrestamosPorLector.filter(item => item.estatusCopia === 'PRESTADA').length

    }

    devolverCopia(idCopia: string): void {

        const copia = this._registrosDePrestamos.filter(item => item.idCopia === idCopia)[0];
        this._registrosDePrestamos = this._registrosDePrestamos.filter(item => item.idCopia != idCopia);

        // Eliminar la copia del regitro de prestamos
        if(copia != undefined) {
            copia.estatusCopia = 'DEVUELTA';
            this._registrosDePrestamos.push(copia);
        }
    }
}
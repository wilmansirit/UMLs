import { Registro } from "./Registro";
import { Persona } from "./Persona";


export class Lector extends Persona {

    private _estaSolvente:boolean;
    private _multadoHastaEl:string = '01/01/1900';
    private _registrosDePrestamos: Registro[] = [];

    constructor(idPersona:string, nombrePersona:string, edad:number){
        super(idPersona, nombrePersona, edad);
        this._estaSolvente = true;
    }

    get estaSolvente(): boolean {
        return this._estaSolvente;
    }

    set estaSolvente(estatus:boolean) {
        this._estaSolvente = estatus;
    }

    get multadoHastaEl():string {
        return this._multadoHastaEl;
    }

    set multadoHastaEl(fecha:string) {
        this._multadoHastaEl = fecha;
    }

    get registrosPrestamosPorLector(): Registro[] {
        return this._registrosDePrestamos;
    }

    registrarPrestamoLector(registro:Registro) : void {
        this._registrosDePrestamos.push(registro);
    }

    numeroCopiasPrestadasActualmente(): number {
        return this.registrosPrestamosPorLector.filter(item => item.estatusCopia === 'PRESTADA').length
    }

    devolverCopia(idCopia: string): void {

        const today = new Date();
        const registro = this._registrosDePrestamos.filter(item => item.idCopia === idCopia)[0];
        const index = this._registrosDePrestamos.indexOf(registro);
        this._registrosDePrestamos.splice(index, 1)

        // Eliminar la copia del regitro de prestamos
        if(registro != undefined) {
            registro.estatusCopia = 'DEVUELTA';
            registro.fechaRealDevolucion = today.toLocaleDateString();
            this._registrosDePrestamos.push(registro);
        }
    }
}
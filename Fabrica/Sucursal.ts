import { Instrumento } from "./Instrumento";
import { TipoInstrumento } from "./TipoInstrumento";

export class Sucursal {
    private nombreSucursal:string;
    private instrumentos:Instrumento[] = [];


    constructor(nombreSucursal:string){
        this.nombreSucursal = nombreSucursal;
    }
    
    getNombreSucursal(): string {
        return this.nombreSucursal;
    }

    public instrumentoPorTipo(tipo:TipoInstrumento):Instrumento[]{
        
        return this.instrumentos.filter(item => item.tipo == tipo);
        
    }
    
    public borrarInstrumento(ID:string): void {
        this.instrumentos = this.instrumentos.filter(item => item.ID != ID)
    }
    
    public agregarInstrumento(instrumento:Instrumento): void {
        this.instrumentos.push(instrumento);
    }
    
    public listarInstrumentos():Instrumento[] {
        return this.instrumentos
    }


}
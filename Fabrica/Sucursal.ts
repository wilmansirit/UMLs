import { Instrumento } from "./Instrumento";
import { TipoInstrumento } from "./TipoInstrumento";

export class Sucursal {
    private nombre:string;
    private instrumentos:Instrumento[] = [];


    constructor(nombreSucursal:string){
        this.nombre = nombreSucursal;
    }
    
    get nombreSucursal(): string {
        return this.nombre;
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
    
    get listarInstrumentos():Instrumento[] {
        return this.instrumentos
    }


}
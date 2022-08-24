import {TipoTajeta} from "./index"
export class TarjetaDeCredito {

    protected numeroTarjeta:string;
    protected tipo:TipoTajeta;

    constructor(numeroTarjeta:string, tipo:TipoTajeta) {
        this.numeroTarjeta = numeroTarjeta;
        this.tipo = tipo
    }
    
}
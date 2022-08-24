import {TipoTarjeta} from "./index"
export class TarjetaDeCredito {

    protected numeroTarjeta:string;
    protected tipo:TipoTarjeta;
    protected DNI:string;

    constructor(tipo:TipoTarjeta, DNI:string) {
        this.tipo = tipo
        this.DNI = DNI
        this.numeroTarjeta = this.GenerarNumeroTarjeta();
    }

    protected GenerarNumeroTarjeta():string {

        return "1234-4567-123456789";

    }
    
}
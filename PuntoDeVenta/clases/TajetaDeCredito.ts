import {TipoTarjeta} from "./index"
export class TarjetaDeCredito {

    numeroTarjeta:string;
    tipo:TipoTarjeta;
    DNI:string;

    constructor(tipo:TipoTarjeta, DNI:string) {
        this.tipo = tipo
        this.DNI = DNI
        this.numeroTarjeta = this.GenerarNumeroTarjeta();
    }

    protected GenerarNumeroTarjeta():string {
        return `${4563}-${Math.round(Math.random() * 10000)}-${Math.round(Math.random() * 100000000)}`
    }
    
}
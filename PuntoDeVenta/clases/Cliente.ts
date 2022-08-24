import { TarjetaDeCredito } from ".";

export class Cliente {
    protected DNI:string;
    protected nombreApellidos:string;
    protected telefono:string;
    protected mail:string
    protected tarjeta:TarjetaDeCredito[] =[];
    protected saldoDisponible:number;


    constructor(DNI:string, nombreApellidos:string, telefono:string, mail:string, tarjeta:TarjetaDeCredito, saldoDisponible:number){

        this.DNI = DNI;
        this.nombreApellidos = nombreApellidos;
        this.telefono = telefono;
        this.mail = mail;
        this.saldoDisponible = saldoDisponible;
        
    }

}
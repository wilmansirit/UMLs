import { TarjetaDeCredito } from ".";

export class Cliente {

    DNI:string;
    nombreApellidos:string;
    telefono:string;
    mail:string
    tarjeta:TarjetaDeCredito[] =[];
    saldoDisponible:number;


    constructor(DNI:string, nombreApellidos:string, telefono:string, mail:string, saldoDisponible:number){

        this.DNI = DNI;
        this.nombreApellidos = nombreApellidos;
        this.telefono = telefono;
        this.mail = mail;
        this.saldoDisponible = saldoDisponible;
        
    }

}
import { EntidadFinanciera, Titular } from "./";

export class TarjetaDeCredito {

    private entidadFinanciera:string;
    private entidadBancaria:string;
    private numeroTarjeta:string;
    private saldoDisponible:number;
    private titular:string;

    constructor(entidadFinanciera:EntidadFinanciera, entidadBancaria:string, numeroTarjeta:string, saldoDisponible:number, titular:Titular) {
        this.entidadFinanciera = entidadFinanciera;
        this.entidadBancaria = entidadBancaria;
        this.numeroTarjeta = numeroTarjeta
        this.saldoDisponible = saldoDisponible;
        this.titular = titular.getFullName();
    }

    public getSaldo():number{
        return this.saldoDisponible;
    }

    public setSaldo(monto:number):void{
        this.saldoDisponible = this.saldoDisponible - monto;
    }

    public getTitular():string{
        return this.titular;
    }

}
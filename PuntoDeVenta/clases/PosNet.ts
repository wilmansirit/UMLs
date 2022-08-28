import { TarjetaDeCredito,Ticket} from "./";

export class PosNet{

    private CANT_MIN_CUOTAS = 1;
    private CANT_MAX_CUOTAS = 6;
    private TASA_INTERES = 0.03;

    public efectuarPago(tarjeta:TarjetaDeCredito, montoAPagar:number, numeroCuotas:number):Ticket | null{

        return null
    }

    private chequearSaldo(tarjeta:TarjetaDeCredito):boolean{

        return false
    }

}

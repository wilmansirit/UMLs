import { TarjetaDeCredito,Ticket} from "./";

export class PosNet{

    private CANT_MIN_CUOTAS = 1;
    private CANT_MAX_CUOTAS = 6;
    private TASA_INTERES = 0.03;

    public efectuarPago(tarjeta:TarjetaDeCredito, montoAPagar:number, numeroCuotas:number):Ticket | null{

        const nombreTitular = tarjeta.getTitular()
        const saldoActual = tarjeta.getSaldo()
        const montoMasInteres = montoAPagar * (1 + this.interes(numeroCuotas));
        
        const isAprobado = this.aprobar(saldoActual, montoMasInteres, numeroCuotas);

        if(isAprobado){

            // Descontar saldo de tarjeta
            tarjeta.setSaldo(saldoActual - montoMasInteres);
            return new Ticket(nombreTitular, montoMasInteres, numeroCuotas);

        } else {

            return null

        }

    }

    private aprobar(saldoActual:number, montoAPagar:number, numeroCuotas:number):boolean{

        if ((saldoActual > montoAPagar) && (numeroCuotas >= this.CANT_MIN_CUOTAS) && (numeroCuotas <= this.CANT_MAX_CUOTAS)){
            return true
        } else {
            return false
        }

    }

    private interes(numeroCuotas:number):number{
        return (numeroCuotas - 1) * this.TASA_INTERES;
    }

}

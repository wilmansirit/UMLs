import { TarjetaDeCredito } from "./TajetaDeCredito";
import { Ticket } from "./Ticket";

export class PosNet{

    public ChequearSaldo(tarjeta:TarjetaDeCredito): boolean {

        
        return false
    }

    public efectuarPago(tarjeta:TarjetaDeCredito, saldoActual:number, numeroCuotas:number):Ticket | null{


        return null
    }

}

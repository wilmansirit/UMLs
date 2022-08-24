import { TarjetaDeCredito, Cliente, TipoTarjeta } from ".";

export class EntidadFinanciera {

    protected nombreEntidadFinanciera:string;
    protected clientes:Cliente[] = [];
    protected tarjetasDeCredito:TarjetaDeCredito[] = [];

    constructor(nombreEndidadFinaciera:string){
        this.nombreEntidadFinanciera = nombreEndidadFinaciera;
    }

    protected crearTarjetaDeCredito(tipo:TipoTarjeta, DNI:string):TarjetaDeCredito{

        const nuevaTarjeta = new TarjetaDeCredito(tipo, DNI)
        return nuevaTarjeta;
    }

    public crearCliente(DNI:string, nombreApellidos:string, telefono:string, mail:string, saldoDisponible:number):Cliente{
        const nuevoCLiente = new Cliente(DNI, nombreApellidos, telefono, mail, saldoDisponible)
        this.clientes.push(nuevoCLiente);
        return nuevoCLiente;
    }
    
    asignarTarjetaDeCredito(cliente:Cliente, tipo:TipoTarjeta){
        const nuevaTarjeta = this.crearTarjetaDeCredito(tipo, cliente.DNI)
        cliente.tarjeta.push(nuevaTarjeta);
    }

    listarCLientes(): Cliente[] {
        return this.clientes;
    }
}


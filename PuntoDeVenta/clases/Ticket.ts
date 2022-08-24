export class Ticket{

    protected nombreApellidosTitular:string;
    protected montoPagado:number;
    protected montoCuotas:number;
    protected numeroCuotas: number;

    constructor(nombreApellidosTitular:string, montoPagado:number, montoCuotas:number, numeroCuotas:number) {

        this.nombreApellidosTitular = nombreApellidosTitular;
        this.montoPagado = montoPagado;
        this.montoCuotas = montoCuotas;
        this.numeroCuotas = numeroCuotas;

    }
    
}
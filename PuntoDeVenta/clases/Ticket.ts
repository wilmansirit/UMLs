export class Ticket{

    protected nombreApellidosTitular:string;
    protected montoAPagar:number;
    protected montoCuotas:number;


    constructor(nombreApellidosTitular:string, montoAPagar:number, montoCuotas:number) {
        this.nombreApellidosTitular = nombreApellidosTitular;
        this.montoAPagar = montoAPagar;
        this.montoCuotas = montoCuotas;
    }
    
}
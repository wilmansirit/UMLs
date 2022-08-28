export class Ticket{

    private nombreApellidosTitular:string;
    private montoAPagar:number;
    private montoCuotas:number;


    constructor(nombreApellidosTitular:string, montoAPagar:number, montoCuotas:number) {
        this.nombreApellidosTitular = nombreApellidosTitular;
        this.montoAPagar = montoAPagar;
        this.montoCuotas = montoCuotas;
    }
    
}
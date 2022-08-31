 export abstract class Empleado {
    private DNI: string;
    private nombres: string;
    private apellidos: string;
    private fechaIngreso: Date;

    constructor(DNI:string,nombres:string, apellidos:string, fechaIngreso: Date) {
        this.DNI = DNI;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.fechaIngreso = fechaIngreso;
    }

    abstract getSalario():number;

    get traerFechaIngreso(): Date {
        return this.fechaIngreso;
    }
 }
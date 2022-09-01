import {Empleado} from "./Empleado"

export class EmpleadoSalarioFijo extends Empleado{
    
    private salarioBasico: number

    constructor(DNI:string,nombres:string, apellidos:string, fechaIngreso: Date, salarioBasico:number) {
        super(DNI, nombres, apellidos, fechaIngreso);
        this.salarioBasico = salarioBasico;
    }


    public getSalario(): number {        
        const salario = this.salarioBasico * (1 + this.calculoPorcentaje());
        return salario;
    }


    private calculoPorcentaje(): number {

        const hoy = new Date()
        const fechaIngreso = super.traerFechaIngreso
        let porcentaje = 0;
        const anioActual = fechaIngreso.getFullYear();
        const anios = hoy.getFullYear() - anioActual;
        
        if (anios >= 2) porcentaje = 0.05;
        if (anios >= 5) porcentaje = 0.1; 

        return porcentaje;
    }

}
import {Empleado} from "./Empleado"
import { Empresa } from "./Empresa";

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
        
        if (anios >= 2) porcentaje = Empresa.PORC_ADIC_2_A_5_ANIOS;
        if (anios >= 5) porcentaje = Empresa.PORC_ADIC_MAS_DE_5_ANIOS; 

        return porcentaje;
    }

}
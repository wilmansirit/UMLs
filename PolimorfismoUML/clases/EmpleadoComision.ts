import { Empleado } from "./Empleado";

export class EmpleadoComision extends Empleado {

    private salarioMinimo: number;
    private numeroClientesCaptados: number;
    private montoPorClienteCaptado: number;


    constructor(DNI:string, nombres:string, apellidos:string, fechaIngreso: Date, salarioMinimo:number, numeroClientesCaptados: number, montoPorClienteCaptado: number){
        
        super(DNI, nombres, apellidos, fechaIngreso);
        this.salarioMinimo = salarioMinimo;
        this.numeroClientesCaptados = numeroClientesCaptados;
        this.montoPorClienteCaptado = montoPorClienteCaptado;

    }

    public getSalario(): number {
        
        let salario = this.numeroClientesCaptados * this.montoPorClienteCaptado;
        if (salario < this.salarioMinimo) salario = this.salarioMinimo

        return salario;
    }

    public get numeroClientes():number {
        return this.numeroClientesCaptados;
    }
}
import {Persona} from './Persona'

export class Empleado extends Persona {
    private sueldo: number;

    constructor(nombres:string, edad:number, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años.`
    }

    calcular_salario_neto(): string {
        return `Mi sueldo es de ${this.sueldo}`
    }
}
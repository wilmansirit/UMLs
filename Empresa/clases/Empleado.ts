import {Persona} from './Persona'

export class Empleado extends Persona {

    sueldo: number;
    cargo: string;

    constructor(nombres:string, edad:number, cargo:string, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
        this.cargo = cargo;
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años.`
    }

    calcular_salario_neto(): void {
        console.log(`${this.nombres} tiene un sueldo de: ${this.sueldo}`)
    }

}
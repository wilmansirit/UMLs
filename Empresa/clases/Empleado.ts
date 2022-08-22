import {Persona} from './Persona'

export class Empleado extends Persona {

    cargo: string;
    sueldo: number;

    constructor(nombres:string, edad:number, cargo:string, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
        this.cargo = cargo;
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años. Cargo: ${this.cargo}.`
    }

    calcular_salario_neto(nuevoSueldo:number): void {
        console.log(`El sueldo de: ${this.nombres} es: ${this.sueldo}`)
    }
}
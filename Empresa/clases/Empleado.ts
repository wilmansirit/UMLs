import {Persona} from './Persona'

export class Empleado extends Persona {
    sueldo: number;

    constructor(nombres:string, edad:number, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años.`
    }

    calcular_salario_neto(nuevoSueldo:number): void {
        this.sueldo = nuevoSueldo;
        console.log(`\nEl sueldo de ${this.nombres} es ahora de ${this.sueldo}`)
    }
}
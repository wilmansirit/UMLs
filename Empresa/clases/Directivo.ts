import {Empleado} from './index'

export class Directivo extends Empleado {

    subordinados:Empleado[] = [];

    constructor(nombres:string, edad:number, cargo:string, sueldo:number){
        super(nombres, edad, cargo, sueldo);
        // this.cargo = cargo;
        // this.sueldo = sueldo;
    }

    agregarSubordinado(empleado:Empleado): void {        
        this.subordinados.push(empleado)       
    }

    mostrarSubordinados(): void {
        console.log(`Listado de subordinados de ${this.nombres}`)
        this.subordinados.forEach(item => console.log(item));
    }
}
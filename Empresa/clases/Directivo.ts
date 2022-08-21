import {Empleado} from './index'

export class Directivo extends Empleado {
    categoria: string;
    subordinados:Empleado[] = [];

    constructor(nombres:string, edad:number, sueldo:number, categoria:string){
        super(nombres, edad, sueldo);
        this.categoria = categoria
    }

    agregarSubordinado(empleado:Empleado): void {
        
        this.subordinados.push(empleado)
       
    }

    mostrarSubordinados(): void {
        console.log(`Listado de subordinados de ${this.nombres}`)
        this.subordinados.forEach(item => console.log(JSON.stringify(item)));
    }
}
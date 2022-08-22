import {Empleado} from './index'

export class Directivo extends Empleado {

    subordinados:Empleado[] = [];

    agregarSubordinado(empleado:Empleado): void {        
        this.subordinados.push(empleado)       
    }

    mostrarSubordinados(): void {
        console.log(`Listado de subordinados de ${this.nombres}`)
        this.subordinados.forEach(item => console.log(item));
    }
}
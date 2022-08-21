import {Persona, Empleado} from './index'

export class Directivo extends Persona {
    private categoria: string;
    subordinados:Empleado[] = [];

    constructor(nombres:string, edad:number, categoria: string){
        super(nombres, edad);
        this.categoria = categoria
    }

    addSubordinado(empleado:Empleado[]): void {

        empleado.forEach(subordinado => {
            this.subordinados.push(subordinado)
        });
        console.log('Se han agregado correctamente los subordinados:')
       
    }

    mostrarSubordinados(): void {
        console.log(`Listado de subordinados de ${this.nombres}`)
        this.subordinados.forEach(item => console.log(JSON.stringify(item)));
    }
}
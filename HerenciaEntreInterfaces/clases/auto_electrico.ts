import { VehiculoRecargable } from "./vehiculoRecargable";

export class AutoElectrico implements VehiculoRecargable {

    marca: string;
    modelo: string;
    velocidadMax: number;

    constructor(marca:string, modelo:string, velocidadMax:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMax = velocidadMax
    }


    encender(): void {
        console.log(` Encendiendo este ${this.marca} modelo ${this.modelo}`)
    }
    apagar(): void {
        console.log(` Apagando este ${this.marca} modelo ${this.modelo}`)
    }
    acelerar(): void {
        console.log(` Acelerando este ${this.marca} modelo ${this.modelo}`)
    }
    frenar(): void {
        console.log(` Frenando este ${this.marca} modelo ${this.modelo}`)
    }

    manejoAutonomo():void {
        console.log(`Iniciando el manejo autonono..!`)
    }

}
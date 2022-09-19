import { VehiculoRecargable } from "./vehiculoRecargable";

export class BiciElectrica implements VehiculoRecargable {

    marca: string;
    modelo: string;
    velocidadMax: number;

    constructor(marca:string, modelo:string, velocidadMax:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMax = velocidadMax
    }

    encender(): void {
        console.log('Encendiendo la bicicleta.....')
    }
    apagar(): void {
        console.log('Apagando la bicicleta.....')
    }
    acelerar(): void {
        console.log('Acelerando la bicicleta.....')
    }
    frenar(): void {
        console.log('Frenando la bicicleta.....')
    }

    pedaler(){
        console.log("Pedaleando, se me acabo la bateria.....!")
    }
    
}
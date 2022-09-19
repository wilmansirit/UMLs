import { VehiculoRecargable } from "./vehiculoRecargable";

export class MonopatinElectrico implements VehiculoRecargable {

    marca: string;
    modelo: string;
    velocidadMax: number;

    constructor(marca:string, modelo:string, velocidadMax:number) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadMax = velocidadMax
    }

    encender(): void {
        console.log('Encendiendo el monopatin....');
    }
    apagar(): void {
        console.log('Apagando el monopatin....');
    }
    acelerar(): void {
        console.log('Acelerando el monopatin....');
    }
    frenar(): void {
        console.log('Frenando el monopatin....');
    }

    ajustarAltura():void {
        console.log('Ajustando la altura del monopatin....!');
    }

    plegar():void {
        console.log('Plegando para guardar el monopatin...!');
    }

}
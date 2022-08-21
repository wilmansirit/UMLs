export class Persona {

    nombres: string;
    edad: number;

    constructor(nombres:string, edad:number){
        this.nombres = nombres;
        this.edad = edad
    }

    mostrar(): string{
        return `${this.nombres}, Edad: ${this.edad} años.`
    }

}
import {Persona} from './Persona'

export class Cliente extends Persona {
    private telefono_de_contacto: string;

    constructor(nombres:string, edad:number, telefono:string){
        super(nombres, edad)
        this.telefono_de_contacto = telefono
    }

    mostrar(): string {
        return `Cliente: ${this.nombres}, Teléfono: ${this.telefono_de_contacto}`
    }
}
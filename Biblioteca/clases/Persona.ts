export abstract class Persona {
    private idPersona:string;
    private nombresApellidos:string;
    private edad:number;

    constructor(idPersona:string, nombresApellidos:string, edad:number) {
        this.idPersona = idPersona;
        this.nombresApellidos = nombresApellidos;
        this.edad = edad;
    }

    get getIdPersona(): string {
        return this.idPersona;
    }

    get getNombresApellidos(): string {
        return this.nombresApellidos;
    }

    get getEdad(): number {
        return this.edad;
    }
}
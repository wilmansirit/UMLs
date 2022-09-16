export class Persona {
    private _id:string;
    private _nombresApellidos:string;
    private _edad:number;

    constructor(idPersona:string, nombresApellidos:string, edad:number) {
        this._id = idPersona;
        this._nombresApellidos = nombresApellidos;
        this._edad = edad;
    }

    get id(): string {
        return this._id;
    }

    get nombresApellidos(): string {
        return this._nombresApellidos;
    }

    get edad(): number {
        return this._edad;
    }
}
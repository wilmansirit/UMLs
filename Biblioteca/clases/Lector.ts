import { Prestamo } from "./Prestamo";

export class Lector {
    public idLector:string;
    private nombreLector:string;
    private listaPrestamos: Prestamo[] = [];

    constructor(idLector:string, nombreLector:string){
        this.idLector = idLector;
        this.nombreLector = nombreLector;
    }

    get getIdLector(): string {
        return this.idLector;
    }

    get getNombreLector(): string {
        return this.nombreLector;
    }

}
import { PrestamosPorLector } from "../prestamosPorLectorInteface";

export class Lector {
    public idLector:string;
    private nombreLector:string;
    private registroDePrestamos: PrestamosPorLector[] = [];

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

    ingresarPrestamo(prestamo:PrestamosPorLector){
        this.registroDePrestamos.push(prestamo);
    }

    numeroDeCopiasBajoPrestamo(): number {

        let numeroCopias = 0;

        numeroCopias = this.registroDePrestamos.filter(prestamo => {

            return prestamo.estatusCopia === 'PRESTADA';

        }).length

        return numeroCopias;

    }
}
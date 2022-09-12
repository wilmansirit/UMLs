
export class Autor {
    private nombreAutor:string
    private nacionalidad:string
    private fechaNacimiento:Date

    constructor(nombreAutor:string, nacionalidad:string, fechaNacimiento:Date) {
        this.nombreAutor = nombreAutor;
        this.nacionalidad = nacionalidad;
        this.fechaNacimiento = fechaNacimiento;
    }

}
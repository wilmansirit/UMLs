export class Titular {

    private DNI:string;
    private nombreApellidos:string;
    private telefono:string;
    private mail:string

    constructor(DNI:string, nombreApellidos:string, telefono:string, mail:string){

        this.DNI = DNI;
        this.nombreApellidos = nombreApellidos;
        this.telefono = telefono;
        this.mail = mail;
        
    }

    public getFullName():string {
        return this.nombreApellidos
    }

}
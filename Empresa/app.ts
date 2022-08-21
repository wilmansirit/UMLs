
class Persona {

    nombres: string;
    edad: number;

    constructor(nombres:string, edad:number){
        this.nombres = nombres;
        this.edad = edad
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años.`
    }

}

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombres:string, edad:number, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
    }

    calcular_salario_neto(): string {
        return `Mi sueldo es de ${this.sueldo}`
    }
}

class Cliente extends Persona {
    private telefono_de_contacto: string;

    constructor(nombres:string, edad:number, telefono:string){
        super(nombres, edad)
        this.telefono_de_contacto = telefono
    }

    mostrar(): string {
        return `Cliente: ${this.nombres}, Teléfono: ${this.telefono_de_contacto}`
    }
}




const empleado001 = new Empleado('Wilman Sirit', 55, 750);
const empleado002 = new Empleado('Victor Sirit', 25, 1030);
const empleado003 = new Empleado('Lisette Cordero', 54, 35);


const cliente001 = new Cliente("Bob Smith", 18, "+6704143678976")
const cliente002 = new Cliente("Jhon Tane", 18, "+5804143685878")
const cliente003 = new Cliente("Mary Simpson", 18, "+590412455543")
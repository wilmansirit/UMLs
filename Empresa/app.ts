import { log } from "console";

class Persona {

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

class Empleado extends Persona {
    private sueldo: number;

    constructor(nombres:string, edad:number, sueldo:number){
        super(nombres, edad)
        this.sueldo = sueldo;
    }

    mostrar(): string{
        return `Empleado: ${this.nombres}, Edad: ${this.edad} años.`
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

class Empresa {
    private nombre:string;
    private clientes:Cliente[] = [];
    private empleados:Empleado[] = [];
    private directivos:Directivo[] = [];

    constructor(nombreEmpresa:string){
        this.nombre = nombreEmpresa;
    }

    agregarClient(clientes:Cliente[]): void {
        clientes.forEach(cliente => {
            this.clientes.push(cliente)
        })
    }

    agregarEmpleados(empleados:Empleado[]): void {
        empleados.forEach(empleado => {
            this.empleados.push(empleado);
        })
    }

    agregarDirectivos(directivos:Directivo[]): void {
        directivos.forEach(directivo => {
            this.directivos.push(directivo);
        })
    }

    mostrarOrganizacion(): void {
        console.log(`Empresa: ${this.nombre}`);

        console.log(`Directivos`);
        this.directivos.forEach(item => console.log(item))

        console.log(`Listado de Empleados`);
        this.empleados.forEach(item => console.log(item))

        console.log(`listado de Clientes`);
        this.clientes.forEach(item => console.log(item))

    }

}

class Directivo extends Persona {
    private categoria: string;
    subordinados:Empleado[] = [];

    constructor(nombres:string, edad:number, categoria: string){
        super(nombres, edad);
        this.categoria = categoria
    }

    addSubordinado(empleado:Empleado[]): void {

        empleado.forEach(subordinado => {
            this.subordinados.push(subordinado)
        });
        console.log('Se han agregado correctamente los subordinados:')
       
    }

    mostrarSubordinados(): void {
        console.log(`Listado de subordinados de ${this.nombres}`)
        this.subordinados.forEach(item => console.log(JSON.stringify(item)));
    }
}

const empresa = new Empresa("Telcel C.A")

const gerente001 = new Directivo('Frederick Manos', 57, 'Gerente');

const empleado001 = new Empleado('Wilman Sirit', 55, 750);
const empleado002 = new Empleado('Victor Sirit', 25, 1030);
const empleado003 = new Empleado('Lisette Cordero', 54, 35);

const cliente001 = new Cliente("Bob Smith", 18, "+6704143678976")
const cliente002 = new Cliente("Jhon Tane", 18, "+5804143685878")
const cliente003 = new Cliente("Mary Simpson", 18, "+590412455543")

empresa.agregarDirectivos([gerente001]);
empresa.agregarEmpleados([empleado001,empleado002,empleado003]);
empresa.agregarClient([cliente001,cliente002,cliente003]);
empresa.mostrarOrganizacion();


console.log(gerente001.mostrar());
gerente001.addSubordinado([empleado001,empleado002,empleado003])
gerente001.mostrarSubordinados();
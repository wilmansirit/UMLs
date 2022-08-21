import {Persona,Empleado, Cliente, Directivo} from "./clases"

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
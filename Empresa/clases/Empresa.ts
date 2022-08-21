import {Cliente, Empleado, Directivo} from './index'

export class Empresa {
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
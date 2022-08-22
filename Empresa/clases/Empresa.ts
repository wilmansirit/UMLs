import {Cliente, Empleado, Directivo, Persona} from './index'

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

    agregarEmpleados(persona:Persona, cargo:string, sueldo:number) {

        const nuevoEmpleado = new Empleado( persona.nombres, persona.edad, cargo, sueldo);
        this.empleados.push(nuevoEmpleado);

    }

    // Crear un nuevo directivo
    promoverEmpleado(empleado:Empleado, nuevoCargo:string, nuevoSueldo:number) {

        empleado.sueldo = nuevoSueldo;
        empleado.cargo = nuevoCargo;
        const nuevoDirectivo = new Directivo (empleado.nombres, empleado.edad, nuevoCargo, nuevoSueldo);
        this.directivos.push(nuevoDirectivo);

    }

    // Aumentandole de sueldo
    aumentarSueldo(empleado:Empleado, nuevoSueldo:number): void {
        empleado.sueldo = nuevoSueldo;
    }

    // Asignando personal al directivo
    asignarEmpleadoADirectivo(empleado:Empleado, directivo:Directivo): void {

        directivo.agregarSubordinado(empleado)

    }

    // Muestra la conformación de la Empresa
    mostrarOrganizacion(): void {
        console.log(`\nEmpresa: ${this.nombre}`);

        console.log(`\nDirectivos`);
        this.directivos.forEach(item => console.log(JSON.stringify(item)))

        console.log(`\nListado de Empleados`);
        this.empleados.forEach(item => console.log(JSON.stringify(item)))

        console.log(`\nlistado de Clientes`);
        this.clientes.forEach(item => console.log(JSON.stringify(item)))

    }

    // Devuelve una lista de Empleados de la Empresa
    listaEmpleados(): Empleado[] {
        return this.empleados;
    }

    // Devuelve una lista de Directivos de la Empresa
    listaDirectivos(): Directivo[] {
        return this.directivos;
    }
}
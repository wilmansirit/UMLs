import {Cliente, Empleado, Directivo, Persona} from './index'

export class Empresa {
    private nombre:string;
    private clientes:Cliente[] = [];
    private empleados:Empleado[] = [];
    private directivos:Directivo[] = [];

    constructor(nombreEmpresa:string){
        this.nombre = nombreEmpresa;
    }

    // Contactar nuevos Clientes
    agregarClientes(clientes:Cliente[]): void {
        clientes.forEach(cliente => {
            this.clientes.push(cliente)
        })
    }

    // Contratar Empleados a la nueva Compañía
    agregarEmpleados(persona:Persona):void {

        const {nombres, edad} = persona
        const sueldo = 100
        const cargo = 'Empleado'
        const nuevoEmpleado = new Empleado(nombres, edad, cargo, sueldo)
        this.empleados.push(nuevoEmpleado);

    }

    // Cambiar Cargo de un Empleado
    cambiarCargo(empleado:Empleado, nuevoCargo:string):void {
        empleado.cargo = nuevoCargo;
    }

    // Crear un nuevo directivo
    crearDirectivo(empleado:Empleado, nuevoCargo:string, nuevoSueldo:number):void {
        let {nombres, edad, cargo, sueldo} = empleado;
        cargo = nuevoCargo;
        sueldo = nuevoSueldo;
        const nuevoDirectivo = new Directivo (nombres, edad, nuevoCargo, nuevoSueldo);
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
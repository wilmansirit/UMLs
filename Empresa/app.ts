import { dir } from "console";
import {Cliente, Directivo, Empleado, Empresa, Persona} from "./clases"




const Telcel = new Empresa("Telcel C.A")

// Crear Personas para que laboren en Telcel
const persona001 = new Persona('Wilman Sirit', 55);
const persona002 = new Persona('Victor Sirit', 25,);
const persona003 = new Persona('Lisette Cordero', 54);
const persona004 = new Persona('Frederic Manos', 57);
const persona005 = new Persona('Daniel Maduro', 30);
const persona006 = new Persona('Nicolas Ortega', 6);
const persona007 = new Persona('Daniel Poleo', 38);
const persona008 = new Persona('Patricia Lara', 42);
const persona009 = new Persona('Antonio Céspedes', 18);
const persona010 = new Persona('María Antonia Flores', 23);

// Contratando personal
Telcel.agregarEmpleados(persona001, 'Empleado', 120);
Telcel.agregarEmpleados(persona002, 'Empleado', 120);
Telcel.agregarEmpleados(persona003, 'Empleado', 120);
Telcel.agregarEmpleados(persona004, 'Empleado', 120);
Telcel.agregarEmpleados(persona005, 'Empleado', 120);
Telcel.agregarEmpleados(persona006, 'Empleado', 120);
Telcel.agregarEmpleados(persona007, 'Empleado', 120);
Telcel.agregarEmpleados(persona008, 'Empleado', 120);
Telcel.agregarEmpleados(persona009, 'Empleado', 120);
Telcel.agregarEmpleados(persona010, 'Empleado', 120);

// Listar y mostrar Empleados;
let empleadosTelcel: Empleado[] = Telcel.listaEmpleados();

console.log('\nListado de Empleados')
empleadosTelcel.forEach(empleado => console.log(JSON.stringify(empleado)));

// Clientes potenciales
const cliente001 = new Cliente("Bob Smith", 18, "+6704143678976")
const cliente002 = new Cliente("Jhon Tane", 18, "+5804143685878")
const cliente003 = new Cliente("Mary Simpson", 18, "+590412455543")

// Captando Clientes
Telcel.agregarClient([cliente001,cliente002,cliente003]);


// Promoviendo a un Empleado a Gerente
const FedericManos: Empleado = empleadosTelcel[3];
const vsirit: Empleado = empleadosTelcel[1];
Telcel.promoverEmpleado(FedericManos, 'Gerente', 276.45);
Telcel.promoverEmpleado(vsirit, 'Gerente General', 438.45);

let directivos:Directivo[] = Telcel.listaDirectivos();

console.log('\nPromoviendo a un Empleado')
directivos.forEach(directivo => console.log(JSON.stringify(directivo)));

// Asignado Empleados a los Directivos
const gerente = directivos[0];
const gerenteGeneral = directivos[1]

Telcel.asignarEmpleadoADirectivo(empleadosTelcel[0], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[2], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[4], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[5], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[6], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[7], gerente);
// Telcel.asignarEmpleadoADirectivo(empleadosTelcel[8], gerente);

Telcel.asignarEmpleadoADirectivo(gerente, gerenteGeneral);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[9], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[10], gerente);


// Listado Empleados del recien promovido Directivo
console.log('\n');
directivos = Telcel.listaDirectivos();
// directivos[0].mostrarSubordinados();
// directivos[1].mostrarSubordinados();

// Aumentando el sueldo de Lisette Cordero
console.log('\nAumentandole el sueldo a un Empleado')
Telcel.aumentarSueldo(empleadosTelcel[2], 145.50);



// Mostrando Organizacion
console.log('\n***********************************************************************')
Telcel.mostrarOrganizacion()


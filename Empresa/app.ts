import {Cliente, Directivo, Empleado, Empresa, Persona} from "./clases"


const Telcel = new Empresa("Telcel C.A")

// Crear Personas para que laboren en Telcel
const persona001 = new Persona('Wilman Sirit', 55);
const persona002 = new Persona('Victor Sirit', 25,);
const persona003 = new Persona('Lisette Cordero', 54);
const persona004 = new Persona('Frederic Manos', 57);
const persona005 = new Persona('Daniel MAduro', 30);
const persona006 = new Persona('Nicolas Ortega', 6);
const persona007 = new Persona('Daniel Poleo', 38);
const persona008 = new Persona('Patricia Lara', 42);
const persona009 = new Persona('Antonio Céspedes', 18);
const persona010 = new Persona('María Antonia Flores', 23);

// Contratando personal
Telcel.agregarEmpleados(persona001);
Telcel.agregarEmpleados(persona002);
Telcel.agregarEmpleados(persona003);
Telcel.agregarEmpleados(persona004);
Telcel.agregarEmpleados(persona005);
Telcel.agregarEmpleados(persona006);
Telcel.agregarEmpleados(persona007);
Telcel.agregarEmpleados(persona008);
Telcel.agregarEmpleados(persona009);
Telcel.agregarEmpleados(persona010);

// Listar y mostrar Empleados;
let empleadosTelcel: Empleado[] = Telcel.listaEmpleados();

console.log('\nListado de Empleados')
empleadosTelcel.forEach(empleado => console.log(JSON.stringify(empleado)));

// Clientes potenciales
const cliente001 = new Cliente("Bob Smith", 18, "+6704143678976")
const cliente002 = new Cliente("Jhon Tane", 18, "+5804143685878")
const cliente003 = new Cliente("Mary Simpson", 18, "+590412455543")

// Captando Clientes
Telcel.agregarClientes([cliente001,cliente002,cliente003]);


// Promoviendo a un Empleado a Gerente
const FedericManos: Empleado = empleadosTelcel[3];
const vsirit: Empleado = empleadosTelcel[1];
Telcel.crearDirectivo(FedericManos, 'Gerente', 276.45);
Telcel.crearDirectivo(vsirit, 'Gerente General', 438.45);

let directivos:Directivo[] = Telcel.listaDirectivos();

console.log('\nPromoviendo a un Empleado')
directivos.forEach(directivo => console.log(JSON.stringify(directivo)));

// Asignado Empleados al Gerente Federic Manos
const lcordero = empleadosTelcel[2];
const gerente = directivos[0];
const gerenteGeneral = directivos[1]

Telcel.asignarEmpleadoADirectivo(empleadosTelcel[0], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[2], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[4], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[5], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[6], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[7], gerente);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[8], gerente);

Telcel.asignarEmpleadoADirectivo(gerente, gerenteGeneral);
Telcel.asignarEmpleadoADirectivo(empleadosTelcel[9], gerenteGeneral);


// Listado Empleados del recien promovido Directivo
console.log('\n');
directivos = Telcel.listaDirectivos();
// directivos[0].mostrarSubordinados();
// directivos[1].mostrarSubordinados();

// Aumentando el sueldo de Lisette Cordero
// const {nombres, edad, sueldo, cargo} = lcordero
// console.log(nombres, edad, sueldo, cargo);

Telcel.aumentarSueldo(lcordero, 145.50);
// Cambiar de cargo
Telcel.cambiarCargo(lcordero, 'Supervisor')



// Mostrando Organizacion
console.log('\n***********************************************************************')
Telcel.mostrarOrganizacion()


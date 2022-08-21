import {Cliente, Directivo, Empleado, Empresa, Persona} from "./clases"




const Telcel = new Empresa("Telcel C.A")

// Crear Personas para que laboren en Telcel
const persona001 = new Persona('Wilman Sirit', 55);
const persona002 = new Persona('Victor Sirit', 25,);
const persona003 = new Persona('Lisette Cordero', 54);
const persona004 = new Persona('Frederic Manos', 60);

// Contratando personal
Telcel.agregarEmpleados(persona001);
Telcel.agregarEmpleados(persona002);
Telcel.agregarEmpleados(persona003);
Telcel.agregarEmpleados(persona004);

// Listar y mostrar Empleados;
let empleadosTelcel: Empleado[] = Telcel.listaEmpleados();

// console.log('\nListado de Empleados')
// empleadosTelcel.forEach(empleado => console.log(JSON.stringify(empleado)));

// Clientes potenciales
const cliente001 = new Cliente("Bob Smith", 18, "+6704143678976")
const cliente002 = new Cliente("Jhon Tane", 18, "+5804143685878")
const cliente003 = new Cliente("Mary Simpson", 18, "+590412455543")

// Captando Clientes
Telcel.agregarClient([cliente001,cliente002,cliente003]);


// Promoviendo a un Empleado a Gerente
const FedericManos: Empleado = empleadosTelcel[3];
Telcel.promoverEmpleado(FedericManos, 'Gerente', 200);
const directivos:Directivo[] = Telcel.listaDirectivos();

// console.log('\nListado de Directivos')
// directivos.forEach(directivo => console.log(JSON.stringify(directivo)))

// Asignado Empleados al Gerente Federic Manos
const wsirit = empleadosTelcel[0];
const lcordero = empleadosTelcel[2];
const fmanos = directivos[0]

Telcel.asignarEmpleadoADirectivo(wsirit, fmanos);
Telcel.asignarEmpleadoADirectivo(lcordero, fmanos);


// Mostrando Organizacion
Telcel.mostrarOrganizacion()


// Ejercicio de Herencia y Polimorfismo

import { Empresa } from "./clases/Empresa";
import { EmpleadoComision } from "./clases/EmpleadoComision";
import { EmpleadoSalarioFijo } from "./clases/EmpleadoSalarioFijo";

// Crear Empleados por salario fijo
const empleadoSF001 = new EmpleadoSalarioFijo("16542345", "Alexander Antonio", "Perez Cordero", new Date("01/09/2017"), 1560);
const empleadoSF002 = new EmpleadoSalarioFijo("14578923", "Agustin Jose", "Da Silva Abreu", new Date("06/01/2021"), 1750);
const empleadoSF003 = new EmpleadoSalarioFijo("25542312", "Cesar Francisco", "Ascanio Lopez", new Date("01/06/2019"), 1235);

// Crear Empleados por comision
const empleadoPC001 = new EmpleadoComision("23897300", "Arnaldo Gabriel", "Daria Jimenez", new Date("14/02/1998"), 1287, 50, 200)
const empleadoPC002 = new EmpleadoComision("7388899", "Lisette Josefina", "Cordero Cordeo", new Date("07/05/2014"), 956.80, 100, 130)
const empleadoPC003 = new EmpleadoComision("9525657", "Wilman Jose", "Sirit Gonzalez", new Date("15/05/1999"), 2287, 25, 300)

// Creando una Empresa
const Telcel = new Empresa("Telcel C.A");

// Asignar Empleados a la Empresa
const nomina:any[] = [empleadoPC001, empleadoPC002, empleadoPC003, empleadoSF001, empleadoSF002, empleadoSF003 ]

nomina.forEach(empleado => {
    Telcel.agregarEmpleados( empleado );
});

// Traer la nomina 
const listado = Telcel.getSalarios();
console.log(listado);

// Traer salario de un empleado
// console.log(empleadoSF001.getSalario())s

console.log( typeof(empleadoPC001))
// Ejercicio de Herencia y Polimorfismo

import { EmpleadoComision } from "./clases/EmpleadoComision";
import { EmpleadoSalarioFijo } from "./clases/EmpleadoSalarioFijo";

// Crear Empleados por salario fijo
const empleadoSF001 = new EmpleadoSalarioFijo("16542345", "Alexander Antonio", "Perez Cordero", new Date("01/09/1995"), 1500);
const empleadoSF002 = new EmpleadoSalarioFijo("14578923", "Agustin Jose", "Da Silva Abreu", new Date("06/01/1992"), 1750);
const empleadoSF003 = new EmpleadoSalarioFijo("25542312", "Cesar Francisco", "Ascanio Lopez", new Date("01/06/2000"), 1235);

// Crear Empleados por comision
const empleadoPC001 = new EmpleadoComision("23897300", "Arnaldo Gabriel", "Daria Jimenez", new Date("14/02/1998"), 1287, 50, 200)
const empleadoPC002 = new EmpleadoComision("7388899", "Lisette Josefina", "Cordero Cordeo", new Date("07/05/2014"), 956.80, 100, 130)
const empleadoPC003 = new EmpleadoComision("9525657", "Wilman Jose", "Sirit Gonzalez", new Date("15/05/1999"), 2287, 25, 300)
console.log(empleadoPC001);


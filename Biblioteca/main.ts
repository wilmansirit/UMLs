import { Biblioteca } from "./clases/Biblioteca";
import { Autor } from "./clases/Autor";
import { Persona } from "./clases/Persona";

console.clear();
// Crear una biblioteca
const pioTamayo = new Biblioteca("Pio Tamayo");

// Instanciar Personas, Autores y crear copias de los libros
const personas = crearPersonas();
const autores = crearAutores();
const libros = crearCopiasDeLibros()

// La biblioteca debe instanciar sus lectores lectores
personas.forEach( persona => {
    pioTamayo.inscribirLector(persona.id, persona.nombresApellidos, persona.edad);
});



// Reparar una copia
// const reparar001 = pioTamayo.repararCopia('978-84-253-6179-6-CP001');
// console.log(reparar001);

// Prestamos de libro de la biblioteca
const prestamo001 = pioTamayo.prestarLibro('V-9525660', '978-84-253-6179-1-CP001');
const prestamo002 = pioTamayo.prestarLibro('V-9525660', '978-84-253-6179-2-CP001');
const prestamo003 = pioTamayo.prestarLibro('V-9525660', '978-84-253-6179-3-CP001');
const prestamo004 = pioTamayo.prestarLibro('V-9525660', '978-84-253-6179-4-CP001');
const prestamo005 = pioTamayo.prestarLibro('V-9525663', '978-84-253-6179-5-CP001');

// console.log({prestamo001, prestamo002, prestamo003, prestamo004, prestamo005});

// console.log('********************* Mostrar Prestamos *********************');
// pioTamayo.mostrarPrestamos();
// console.log(pioTamayo.buscarLectorPorId('V-9525663'))

// Devolver una copia
const devolver = pioTamayo.devolverLibro('978-84-253-6179-1-CP001');
console.log(devolver);


// Mostrar Prestamos de la biblioteca
// console.log('********************* Mostrar Prestamos *********************');
pioTamayo.mostrarPrestamos();

// Mostrar


// Mostrar Biblioteca
// console.log(JSON.stringify(pioTamayo))




// Mostrar Registros de la biblioteca
// console.log('********************* Registros de la Biblioteca *********************');
// pioTamayo.mostrarRegistros();















function crearAutores(): Autor[] {

    const listadoAutores =
    [
        {nombre: 'Ildefonso Falcon', nacionalidad: 'Español',	fechaNacimiento: '09/03/1959'},
        {nombre: 'Joël Dicker',	nacionalidad: 'Suizo', fechaNacimiento: '16/06/85'},
        {nombre: 'Leonardo Padura', nacionalidad: 'Cubano', fechaNacimiento: '09/10/1955'},
        {nombre: 'Víctor Hugo',	nacionalidad: 'Francesa',	fechaNacimiento: '26/02/1802'},
        {nombre: 'Paulo Cohelo',	nacionalidad: 'Brasileño',	fechaNacimiento: '24/08/1947'},
        {nombre: 'Gabriel García Márquez',	nacionalidad: 'Colombiano',	fechaNacimiento: '06/04/1927'},
        {nombre: 'Antoine de Saint-Exupéry',	nacionalidad: 'Francesa',	fechaNacimiento: '26/06/1900'},
        {nombre: 'Oscar Wilde',	nacionalidad: 'Irlandes',	fechaNacimiento: '16/10/1854'},
        {nombre: 'Aldous Huxley',	nacionalidad: 'Estadounidense', fechaNacimiento:'26/07/1894'},
        {nombre: 'Truman Capote',	nacionalidad: 'Estadounidense', fechaNacimiento:	'30/09/1924'}
    ]

    return listadoAutores.map(item => {
                return new Autor(item.nombre, item.nacionalidad, item.fechaNacimiento);
            });

}

function crearCopiasDeLibros() {
    
    let cont = 0;

    const libreria: any[] = 
    [
        { ISBN: '978-84-253-6179-1', nombreLibro: 'Esclava de la libertad', editorial: 'GRIJALBO', anio: 2022, autor: 'Falcones, Ildefonso', tipoLibro: "NOVELA"},
        { ISBN: '978-84-253-6179-2', nombreLibro: 'El caso Alaska Sanders', editorial: 'ALFAGUARA', anio: 2020, autor: 'Dicker, Joël', tipoLibro: "NOVELA"},
        { ISBN: '978-84-253-6179-3', nombreLibro: 'Personas decentes', editorial: 'Tusquets Editores', anio: 2001, autor: 'Padura, Leonardo', tipoLibro: "TEATRO"},
        { ISBN: '978-84-253-6179-4', nombreLibro: 'Los Miserables', editorial: 'Brugera', anio: 1989, autor: 'Víctor Hugo', tipoLibro: "POESIA"},
        { ISBN: '978-84-253-6179-5', nombreLibro: 'El Alquimista', editorial: 'Didascalia', anio: 2009, autor: 'Paulo Cohelo', tipoLibro: "ENSAYO"},
        { ISBN: '978-84-253-6179-6', nombreLibro: 'Cien Años de Soledad', editorial: 'Putomayo', anio: 1975, autor: 'Gabriel García Márquez', tipoLibro: "NOVELA"},
        { ISBN: '978-84-253-6179-7', nombreLibro: 'EL Principito', editorial: 'LeFrance', anio: 1952, autor: 'Antoine de Saint-Exupéry', tipoLibro: "POESIA"},
        { ISBN: '978-84-253-6179-8', nombreLibro: 'El retrato de Dorian Grey', editorial: 'Smith/ Weson', anio: 1918, autor: 'Oscar Wilde', tipoLibro: "TEATRO"},
        { ISBN: '978-84-253-6179-9', nombreLibro: 'Un Mundo Feliz', editorial: 'Anaya Multimedia', anio: 1998, autor: 'Aldou Huxley', tipoLibro: "ENSAYO"},
        { ISBN: '978-84-253-6179-10', nombreLibro: 'A sangre fria', editorial: 'PRENTICE-HALL INTERNATIONAL EDITION', anio: 2000, autor: 'Truman Capote', tipoLibro: "NOVELA"}
    ];


    return libreria.forEach(item => {

        pioTamayo.crearCopias(item.ISBN, item.nombreLibro, item.editorial, item.anio, autores[cont], item.tipoLibro);
        ++cont;

    })

}

function crearPersonas():Persona[] {

    const personas = [
        {id: 'V-9525660', nombres: 'SARA RAMONA CUICAS DE GARCIA', edad: 45},
        {id: 'V-9525661', nombres: 'CELIA ROSA GARCIA CUICAS', edad: 45},
        {id: 'V-9525662', nombres: 'MARLENYS COROMOTO GARCIA CUICA', edad: 45},
        {id: 'V-9525663', nombres: 'JOSE GREGORIO HERNANDEZ ZARRAGA', edad: 45},
        {id: 'V-9525664', nombres: 'ANGELA MARGARITA GARCIA DE SECO', edad: 45},
        {id: 'V-9525665', nombres: 'ELEIDA JOSEFINA CUICAS ', edad: 45},
        {id: 'V-9525666', nombres: 'FRANCISCO JOSE GALIZ', edad: 45},
        {id: 'V-9525668', nombres: 'CLEOTILDE MARIA PEÑA', edad: 45},
        {id: 'V-9525669', nombres: 'ALEJANDRINA  URBINA FERNANDEZ', edad: 45}
    ]

    return personas.map(persona => {
        return new Persona(persona.id, persona.nombres, persona.edad)
    });
} 
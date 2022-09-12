import { Biblioteca } from "./clases/Biblioteca";
import { Libreria } from "./clases/libreria";
import { Libro } from "./clases/Libro";
import { Autor } from "./clases/Autor";
import { Lector } from "./clases/Lector";


console.clear()
// Crear una biblioteca
const pioTamayo = new Biblioteca("Pio Tamayo");

// Crear y mostrar Autores
const autores:Autor[] = crearAutores();
// autores.forEach(autor => console.log(autor));

// Crear los libros y las copias
const libros = crearLibros()
// libros.forEach(libro => console.log(libro));

// Crear las copias de todos los libros
crearCopias()

//Mostrar Copias.
const copias = pioTamayo.traerCopias();
// copias.forEach(item => console.log(item))

// Crear Lectores
const lectores = crearLectores();
// lectores.forEach(item => console.log(item));

// Afiliar lectores
lectores.forEach(lector => {pioTamayo.agregarLector( lector )});

// Prestar un libro
const prestamo001 = pioTamayo.prestarLibro('V-9525660', '978-84-253-6179-1-copia001');
const prestamo002 = pioTamayo.prestarLibro('V-9525669', '978-84-253-6179-7-copia003');
console.log(prestamo001, prestamo002);

// Mostrar Prestamos
// const prestamos = pioTamayo.mostrarPrestamos();
// prestamos.forEach(prestamo => console.log(prestamo));

// Mostrar Biblioteca
// console.log(JSON.stringify(pioTamayo))

// Reparar una copia
const reparar001 = pioTamayo.repararCopia('978-84-253-6179-6-copia003');
console.log(reparar001);


// Mostrar Registros de la biblioteca
// console.log('********************* Registros de la Biblioteca *********************');
// pioTamayo.mostrarRegistros();













function crearAutores(): Autor[] {

    const listadoAutores =
    [
        {nombre: 'Ildefonso Falcon', nacionalidad: 'Español',	fechaNacimiento: '03/09/1959'},
        {nombre: 'Joël Dicker',	nacionalidad: 'Suizo', fechaNacimiento: '06/16/85'},
        {nombre: 'Leonardo Padura', nacionalidad: 'Cubano', fechaNacimiento: '10/09/1955'},
        {nombre: 'Víctor Hugo',	nacionalidad: 'Francesa',	fechaNacimiento: '02/26/1802'},
        {nombre: 'Paulo Cohelo',	nacionalidad: 'Brasileño',	fechaNacimiento: '08/24/1947'},
        {nombre: 'Gabriel García Márquez',	nacionalidad: 'Colombiano',	fechaNacimiento: '04/06/1927'},
        {nombre: 'Antoine de Saint-Exupéry',	nacionalidad: 'Francesa',	fechaNacimiento: '06/26/1900'},
        {nombre: 'Oscar Wilde',	nacionalidad: 'Irlandes',	fechaNacimiento: '10/16/1854'},
        {nombre: 'Aldous Huxley',	nacionalidad: 'Estadounidense', fechaNacimiento:'07/26/1894'},
        {nombre: 'Truman Capote',	nacionalidad: 'Estadounidense', fechaNacimiento:	'09/30/1924'}
    ]

    return listadoAutores.map(item => {
                return new Autor(item.nombre, item.nacionalidad, new Date(item.fechaNacimiento))
            });

}

function crearLibros() {
    
    let cont = 0;

    const libreria: Libreria[] = 
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


    return libreria.map(item => {

        let nuevoLibro =  new Libro(item.ISBN, item.nombreLibro, item.editorial, item.anio, autores[cont], item.tipoLibro)
        ++cont;

        return nuevoLibro;
    })



    
    



}

function crearCopias() {

    libros.map(libro => {

        pioTamayo.crearCopias(libro);

    })

}

function crearLectores():Lector[] {

    const lectores = [
        {idLector: 'V-9525660',nombresLector: 'SARA RAMONA CUICAS DE GARCIA'},
        {idLector: 'V-9525661',nombresLector: 'CELIA ROSA GARCIA CUICAS'},
        {idLector: 'V-9525662',nombresLector: 'MARLENYS COROMOTO GARCIA CUICA'},
        {idLector: 'V-9525663',nombresLector: 'JOSE GREGORIO HERNANDEZ ZARRAGA'},
        {idLector: 'V-9525664',nombresLector: 'ANGELA MARGARITA GARCIA DE SECO'},
        {idLector: 'V-9525665',nombresLector: 'ELEIDA JOSEFINA CUICAS '},
        {idLector: 'V-9525666',nombresLector: 'FRANCISCO JOSE GALIZ '},
        {idLector: 'V-9525668',nombresLector: 'CLEOTILDE MARIA PEÑA '},
        {idLector: 'V-9525669',nombresLector: 'ALEJANDRINA  URBINA FERNANDEZ'}
    ]

    return lectores.map(item => {
        return new Lector(item.idLector, item.nombresLector);
    });

}
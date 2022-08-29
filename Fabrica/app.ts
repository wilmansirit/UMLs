import { Fabrica, Instrumento, Sucursal } from "./clases";

// Crear la fabrica de instrumentos
const fabrica = new Fabrica()
const guitarra = new Instrumento("GTR001", 1234.48, "CUERDA");
const ukelele = new Instrumento("UKL001", 234.65, "CUERDA");
const bateria = new Instrumento("PNO001", 10763.35, "PERCUSION");
const trompeta = new Instrumento("TRP001", 424.25, "VIENTO");
const guitarraClasica= new Instrumento("GTR002", 2456.25, "CUERDA");
const ukeleleClasico = new Instrumento("UKL002", 344.45, "CUERDA");
const bomgos = new Instrumento("BMG001", 1763.55, "PERCUSION");
const trombon = new Instrumento("TMB001", 584.55, "VIENTO");

// Crear una sucursales
const pabloCanela = new Sucursal("PabloCanela");
const salonMixto = new Sucursal("SalonMixto");

// Agregar Sucursales a la Fabrica
fabrica.agregarSucursal(pabloCanela);
fabrica.agregarSucursal(salonMixto);

// Cargar Instrumentos en una sucursal
pabloCanela.agregarInstrumento(guitarra);
pabloCanela.agregarInstrumento(ukelele);
pabloCanela.agregarInstrumento(bateria);
pabloCanela.agregarInstrumento(trompeta);
salonMixto.agregarInstrumento(guitarraClasica);
salonMixto.agregarInstrumento(ukeleleClasico);
salonMixto.agregarInstrumento(bomgos);
salonMixto.agregarInstrumento(trombon);

// Listar Instrumentos por Sucursal
console.log("\nListado de Instrumentos por Sucursal")
fabrica.listarInstrumentos();

// Listar instrumento por tipo de una sucursal.
console.log("\nListado de Instrumentos por tipo y por Sucursal")
const instrumCuerdaSalonMixto = salonMixto.instrumentoPorTipo("CUERDA");
instrumCuerdaSalonMixto.forEach(item => console.log(JSON.stringify(item)));

// Borrar instrumento de una sucursal por ID
console.log("\nBorrar instrumento de una sucursal por ID")
pabloCanela.borrarInstrumento("UKL001");
pabloCanela.borrarInstrumento("TRP001");
fabrica.listarInstrumentos();

// Porcentaje de Instrumentos en una Sucursal
console.log("\nPorcentaje de Instrumentos por Sucursal");
fabrica.porcInstrumentosPorTipo(salonMixto);

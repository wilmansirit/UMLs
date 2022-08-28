import { EntidadFinanciera, Cliente, PosNet} from "./clases";


const BancoUnion = new EntidadFinanciera("Banco Unión");

// Ingresando Clientes al nuevo Banco
const cliente001:Cliente = BancoUnion.crearCliente("9525657", "Wilman Sirit", "0414-3509923", "wsirit@gmail.com", 1000);

BancoUnion.asignarTarjetaDeCredito(cliente001, "MASTERCARD");
BancoUnion.asignarTarjetaDeCredito(cliente001, "VISA");

// Listado de clientes
let listadoDeClientes = BancoUnion.listarCLientes();
// listadoDeClientes.forEach(cliente => console.log(JSON.stringify(cliente)));

// Traer tarjeta de Cliente
const MASTER = listadoDeClientes[0].tarjeta[0];
const VISA = listadoDeClientes[0].tarjeta[1];

// Instancias un Punto de Venta
const postnet = new PosNet();

const ticket = postnet.efectuarPago(BancoUnion, MASTER, "9525657", 500, 3);
console.log(ticket);
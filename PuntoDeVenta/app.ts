import { EntidadFinanciera, Cliente} from "./clases";


const BancoUnion = new EntidadFinanciera("Banco Unión");

// Ingresando Clientes al nuevo Banco
const cliente001:Cliente = BancoUnion.crearCliente("9525657", "Wilman Sirit", "0414-3509923", "wsirit@gmail.com", 1000);

let listadoDeClientes:Cliente[] = BancoUnion.listarCLientes();
listadoDeClientes.forEach(cliente => console.log(JSON.stringify(cliente)));

BancoUnion.asignarTarjetaDeCredito(cliente001, "MASTERCARD");
BancoUnion.asignarTarjetaDeCredito(cliente001, "VISA");



listadoDeClientes = BancoUnion.listarCLientes();
listadoDeClientes.forEach(cliente => console.log(JSON.stringify(cliente)));

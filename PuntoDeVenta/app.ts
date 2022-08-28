import { PosNet, TarjetaDeCredito, Titular } from "./clases"

// Crear un PosNet
const posnet = new PosNet();

// Crear un Titutar de Tarjeta de Credito
const antonioZaes = new Titular("9525657", "Antonio Zaes", "04147332788", "azaes@gmail.com");

// Crear tarjeta de credito para AntonioZaes
const visa = new TarjetaDeCredito("MASTERCARD", "BancoUnion", "1234-5678-123456789", 15_000, antonioZaes);

// Efectuar una compra
const ticketDeCompra = posnet.efectuarPago(visa, 10_000, 5);

console.log("\nSaldo Actual")
console.log(visa.getSaldo());

console.log("\nSu ticket de compra")
console.log(JSON.stringify(ticketDeCompra));

console.log("\nSu saldo ahora es de:")
console.log(visa.getSaldo());
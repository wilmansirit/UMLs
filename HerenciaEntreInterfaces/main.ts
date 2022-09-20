import { AutoElectrico } from "./clases/auto_electrico";
import { BiciElectrica } from "./clases/bici_electrica";
import { MonopatinElectrico } from "./clases/monopatin_electrico";



const tesla = new AutoElectrico('Testa', 'S3', 190);
const bic = new BiciElectrica('Eskute', 'ES4566', 50)
const patin = new MonopatinElectrico('HOMCOM', 'HC2000-22', 5)


tesla.encender();
tesla.manejoAutonomo();

bic.encender();
bic.acelerar();
bic.frenar();

patin.ajustarAltura();
patin.encender();
patin.acelerar()
patin.acelerar();
patin.frenar();
patin.apagar();
patin.plegar()
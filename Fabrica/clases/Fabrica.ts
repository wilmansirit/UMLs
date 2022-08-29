import { Sucursal } from "./Sucursal";
import { ObjectInstr, TipoInstrumento } from "./TipoInstrumento";

export class Fabrica {

    private sucursales:Sucursal[] = [];

    agregarSucursal(sucursal:Sucursal):void {
        this.sucursales.push(sucursal);
    }

    porcInstrumentosPorTipo(sucursal:Sucursal):void{

        const inventario = new Object as ObjectInstr
        const tipos:TipoInstrumento[] = ["PERCUSION","VIENTO","CUERDA"];
        const numeroInstrumentos = sucursal.listarInstrumentos.length

        tipos.forEach(tipo => {
            inventario[tipo] = sucursal.instrumentoPorTipo(tipo).length / numeroInstrumentos * 100;            
        })
        
        console.log(inventario);
    }

    listarInstrumentos():void {

        this.sucursales.forEach(sucursal => {

            console.log("\n" + sucursal.nombreSucursal)            
            sucursal.listarInstrumentos.forEach(instrumento => {
                console.log(JSON.stringify(instrumento))
            });

        })

    }

}
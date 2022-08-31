import { Empleado } from "./Empleado";

export class Empresa {

    static PORC_ADIC_2_A_5_ANIOS = 0.05;
    static PORC_ADIC_MAS_DE_5_ANIOS = 0.1;
    private listaEmpleados:Empleado[] = [];

    public agregarEmpleados(empleado:Empleado):void {
        this.listaEmpleados.push(empleado);
    }

    public empleadoConMasClientes():Empleado | null{
        
        return null
    }    

}
import { Empleado } from "./Empleado";
import { EmpleadoComision } from "./EmpleadoComision";
import { salarios } from "./Interfaces";

export class Empresa {

    static PORC_ADIC_2_A_5_ANIOS = 0.05;
    static PORC_ADIC_MAS_DE_5_ANIOS = 0.1;
    private listaEmpleados:Empleado[] = [];
    private nombreEmpresa:string;


    constructor(nombreEmpresa:string){
        this.nombreEmpresa = nombreEmpresa;
    }

    public agregarEmpleados(empleado:Empleado):void {
        this.listaEmpleados.push(empleado);
    }

    public getSalarios():salarios {

        let nomina = new Object() as salarios;
        this.listaEmpleados.forEach(empleado => {

            nomina[empleado.fullName] = empleado.getSalario();

        })

        return nomina;
    }

    public empleadoConMasClientes():Empleado | null{
        
        let empleadoGanador:Empleado | null= null;
        let mayorSalario = 0;

        this.listaEmpleados.forEach(empleado => {

            if (empleado instanceof EmpleadoComision) {
                if (mayorSalario < empleado.getSalario()) {
                    mayorSalario = empleado.getSalario();
                    empleadoGanador = empleado;
                };
            }

        })

        return empleadoGanador;

    }    

}
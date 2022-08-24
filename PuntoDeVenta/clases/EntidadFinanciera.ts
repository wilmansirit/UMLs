import { Cliente } from "./Cliente";

export class EntidadFinanciera {

    protected nombreEntidadFinanciera:string;
    protected clientes:Cliente[] = [];

    constructor(nombreEndidadFinaciera:string){
        this.nombreEntidadFinanciera = nombreEndidadFinaciera;
    }

    
    
}
export interface Vehiculo {

    marca:string
    modelo:string
    velocidadMax:number

    encender():void
    apagar():void
    acelerar():void
    frenar():void
    
}
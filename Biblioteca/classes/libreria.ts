import { TipoLibro } from "./TipoLibro"

export type Libreria = {
    ISBN: string,
    nombreLibro: string,
    editorial: string,
    anio: number,
    autor: string,
    tipoLibro: TipoLibro
}

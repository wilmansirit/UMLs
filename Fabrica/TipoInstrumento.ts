export type TipoInstrumento = "PERCUSION" | "VIENTO" | "CUERDA" | "Instrumentos eléctricos"


export interface IInstrumento {
    PERCUSION: number;
    VIENTO:    number;
    CUERDA:    number;
}

// export type ObjectInstr = Record<TipoInstrumento, number>
export type ObjectInstr = {
    [prop in TipoInstrumento]: number;
};

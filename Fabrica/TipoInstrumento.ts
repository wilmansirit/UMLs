export type TipoInstrumento = "PERCUSION" | "VIENTO" | "CUERDA" | "Instrumentos eléctricos"

// Otra manera de crearlo.
// export type ObjectInstr = Record<TipoInstrumento, number>
export type ObjectInstr = {
    [prop in TipoInstrumento]: number;
};
 
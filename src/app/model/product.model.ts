export interface Producto {
    image:            Image[];
    precio:           number;
    descripcion:      string;
    precioDesscuento: number | string;
    tallas:           Tallas;
    descuento:        boolean | null;
    porcentaje:       number | string;
}

export interface Image {
    nombre: string;
    id:     string;
    url:    string;
}

export interface Tallas {
    xl: boolean | null;
    xs: boolean | null;
    m:  boolean | null;
    s:  boolean;
    l:  boolean | null;
}
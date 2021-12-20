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
    xl: boolean;
    xs: boolean;
    x:  boolean;
    m:  boolean;
    s:  boolean;
    l:  boolean;
}

export interface Pedido{
    articulo: string,
    talla: string,
    cantidad: number,
    precio: number,
    url: string
  }
import { Producto } from "../producto/producto";

export class FacturaProducto {
  producto: Producto;
  valor: number;
  cantidad: number;

  constructor(producto: Producto, valor: number, cantidad: number) {
    this.producto = producto;
    this.valor = valor;
    this.cantidad = cantidad;
  }
}

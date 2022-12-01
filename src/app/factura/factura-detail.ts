import { Producto } from "../producto/producto";

export class FacturaDetail{
  producto: Producto;
  valor: number;
  cantidad: number;
  constructor(producto: Producto, cantidad: number, valor:number) {
    this.producto = producto;
    this.cantidad = cantidad;
    this.valor = valor;
  }
}

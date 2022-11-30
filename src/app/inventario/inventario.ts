import { Isla } from "../isla/isla";
import { Producto } from "../producto/producto"

export class Inventario {
  cantidad: number;
  isla: Isla;
  producto: Producto;

  constructor(cantidad:number, isla:Isla, producto:Producto) {
    this.cantidad = cantidad;
    this.isla = isla;
    this.producto = producto;
  }
}

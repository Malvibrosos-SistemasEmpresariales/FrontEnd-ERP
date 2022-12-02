import { Isla } from "../isla/isla";
import { Producto } from "../producto/producto"

export class Inventario {
  id: number;
  cantidad: number;
  isla: Isla;
  producto: Producto;

  constructor(id:number, cantidad:number, isla:Isla, producto:Producto) {
    this.id = id;
    this.cantidad = cantidad;
    this.isla = isla;
    this.producto = producto;
  }
}

import { Inventario } from "./inventario";

export class InventarioMovimientos {
  id: number;
  fecha: any;
  cantidad: number;
  inventario: Inventario;

  constructor(id: number, fecha: any, cantidad: number, inventario: Inventario) {
    this.id = id;
    this.fecha = fecha;
    this.cantidad = cantidad;
    this.inventario = inventario;
  }
}

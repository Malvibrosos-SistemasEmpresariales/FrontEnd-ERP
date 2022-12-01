import { Asesor } from "../asesor/asesor";
import { Cliente } from "../cliente/cliente";
import { FacturaProducto } from "./factura-producto";
import { Factura } from "./factura";

export class FacturaDetail extends Factura{
  factura_detalle: FacturaProducto[];
  constructor(id:number, fecha:any, total:number, cliente:Cliente, asesor:Asesor, factura_detalle: FacturaProducto[]) {
    super(id, fecha, total, cliente, asesor);
    this.factura_detalle = factura_detalle;
  }
}

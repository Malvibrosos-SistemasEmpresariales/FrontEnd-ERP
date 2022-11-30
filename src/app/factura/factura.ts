import { Cliente } from '../cliente/cliente';
import { Asesor } from '../asesor/asesor';


export class Factura {
  id: number;
  fecha: any;
  total: number;
  cliente: Cliente;
  asesor: Asesor;

  constructor(id:number, fecha:any, total:number, cliente:Cliente, asesor:Asesor) {
    this.id = id;
    this.fecha = fecha;
    this.total = total;
    this.cliente = cliente;
    this.asesor = asesor;
  }
}

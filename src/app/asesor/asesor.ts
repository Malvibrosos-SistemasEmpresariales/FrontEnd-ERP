import { Isla } from '../isla/isla';

export class Asesor {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: string;
  isla: Isla;

  constructor(id:number, nombre:string, apellido:string, correo:string, tipoDocumento:string, isla:Isla) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.tipoDocumento = tipoDocumento;
    this.isla = isla;
  }
}

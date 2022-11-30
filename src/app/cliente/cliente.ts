export class Cliente {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  tipoDocumento: string;

  constructor(id:number, nombre:string, apellido:string, correo:string, tipoDocumento:string) {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo = correo;
    this.tipoDocumento = tipoDocumento;
  }
}

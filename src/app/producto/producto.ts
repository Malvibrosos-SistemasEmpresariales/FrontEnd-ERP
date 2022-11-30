export class Producto {
  codigo: string;
  nombre: string;
  valor: number;
  categoria: string;

  constructor(codigo: string, nombre: string, valor: number, categoria: string) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.valor = valor;
    this.categoria = categoria;
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/producto/producto';
import { ProductoService } from 'src/app/producto/producto.service';
import { Inventario } from '../inventario';
import { InventarioMovimientos } from '../inventario-movimientos';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario-list-single',
  templateUrl: './inventario-list-single.component.html',
  styleUrls: ['./inventario-list-single.component.css'],
})
export class InventarioListSingleComponent implements OnInit {
  inventarios: Inventario[] = [];
  inventarioMov: InventarioMovimientos[] = [];
  id: string = '';
  producto!: Producto;
  total: number = 0;

  constructor(
    private router: Router,
    private inventarioService: InventarioService,
    private productoService: ProductoService
  ) {
    this.id = this.router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.getProducto();
    this.getInventarios();
  }

  getInventarios(): void {
    this.inventarioService.getInventarios().subscribe((inventarios) => {
      this.inventarios = inventarios;
      // filter by id
      this.inventarios = this.inventarios.filter(
        (inventario) => inventario.producto.codigo === this.id
      );
    });
    for (let i = 0; i < this.inventarios.length; i++) {
      console.log(this.inventarios[i].producto.codigo);
      this.total += this.inventarios[i].cantidad;
    }
  }

  getProducto(): void {
    this.productoService.getProducto(this.id).subscribe((producto) => {
      this.producto = producto;
    });
  }

  goBack(): void {
    this.router.navigate(['/inventarios']);
  }

  getUltimaActualizacion(id: number): string {
    const inventarioMov = this.inventarioMov.find(
      (inventario) => inventario.id === id
    );
    if (inventarioMov) {
      return inventarioMov.fecha;
    } else {
      return 'No hay movimientos';
    }
  }

  editInventario(id: number): void {
    this.router.navigate(['/inventarios/edit', id]);
  }
}

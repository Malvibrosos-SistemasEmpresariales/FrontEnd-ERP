import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inventario } from '../inventario';
import { InventarioMovimientos } from '../inventario-movimientos';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario-list',
  templateUrl: './inventario-list.component.html',
  styleUrls: ['./inventario-list.component.css'],
})
export class InventarioListComponent implements OnInit {
  inventarios: Inventario[] = [];
  inventarioMov: InventarioMovimientos[] = [];
  inventariosVisible: Inventario[] = [];
  categorias: string[] = [];
  total = 0;
  filtro = '';

  constructor(private inventarioService: InventarioService, private router: Router) {}

  ngOnInit(): void {
    this.getInventarioMovimientos();
    this.getInventarios();
  }

  getInventarioMovimientos(): void {
    this.inventarioService.getInventariosMovimientos().subscribe((inventarioMov) => {
      this.inventarioMov = inventarioMov;
    });
  }

  getInventarios(): void {
    this.inventarioService.getInventarios().subscribe((inventarios) => {
      this.inventarios = inventarios;
      this.total = this.inventarios.length;
      this.inventariosVisible = this.inventarios;
      this.categorias = this.inventarios.map(
        (inventario) => inventario.producto.categoria
      );
    });
  }

  changeCategoria(categoria?: string): void {
    if (categoria) {
      this.inventariosVisible = this.inventarios.filter(
        (inventario) => inventario.producto.categoria === categoria
      );
    } else {
      this.inventariosVisible = this.inventarios;
    }
    this.total = this.inventariosVisible.length;
  }

  search(): void {
    this.inventariosVisible = this.inventarios.filter(
      (inventario) =>
        inventario.producto.nombre
          .toLowerCase()
          .includes(this.filtro.toLowerCase()) ||
        inventario.producto.categoria
          .toLowerCase()
          .includes(this.filtro.toLowerCase()) ||
        inventario.producto.codigo
          .toLowerCase()
          .includes(this.filtro.toLowerCase())
    );
    // refresh the table after filtering
    this.total = this.inventariosVisible.length;
  }

  add(): void {
    // Navigate using router to create product
    this.router.navigate(['inventarios/create']);
  }

  delete(): void {
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

  goBack(): void {
    this.router.navigate(['/home']);
  }

  goDetail(id: string): void {
    // show all posible routes
    console.log(this.router.config);
    // Navigate using router to detail product
    this.router.navigate([`/inventarios/${id}`]);
  }
}

import { Component, OnInit } from '@angular/core';
import { Isla } from 'src/app/isla/isla';
import { IslaService } from 'src/app/isla/isla.service';
import { Producto } from 'src/app/producto/producto';
import { ProductoService } from 'src/app/producto/producto.service';
import { FormBuilder } from '@angular/forms';
import { Inventario } from '../inventario';
import { Router } from '@angular/router';
import { InventarioService } from '../inventario.service';

@Component({
  selector: 'app-inventario-create',
  templateUrl: './inventario-create.component.html',
  styleUrls: ['./inventario-create.component.css']
})
export class InventarioCreateComponent implements OnInit {

  productos: Producto[] = [];
  islas: Isla[] = [];
  inventarioCreateForm = this.formBuilder.group({
    cantidad: 0,
    producto: null,
    isla: null
  });
  constructor(private productoService:ProductoService, private islaService:IslaService, private inventarioService: InventarioService,
    private formBuilder:FormBuilder, private router: Router) { }

  onSubmit(){
    const producto = this.productos.find(
      (producto) => producto.nombre === this.inventarioCreateForm.value.producto
    )
    const isla = this.islas.find(
      (isla) => isla.centroComercial === this.inventarioCreateForm.value.isla
    )
    const inventario = new Inventario(1,this.inventarioCreateForm.value.cantidad, isla, producto);
    this.inventarioService.createInventarios(inventario).subscribe((inventario) =>{
      window.location.reload();
    })
  }
  ngOnInit() {
    this.getProductos();
    this.getIslas();
  }

  getProductos(){
    this.productoService.getProductos().subscribe((productos) =>{
      this.productos = productos;
    });
  }

  getIslas(){
    this.islaService.getIslas().subscribe((islas) =>{
      this.islas = islas;
    });
  }

  updateProducto(event){
    this.inventarioCreateForm.patchValue({
      producto: event
    });
  }

  updateIsla(event){
    this.inventarioCreateForm.patchValue({
      isla: event
    });
  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

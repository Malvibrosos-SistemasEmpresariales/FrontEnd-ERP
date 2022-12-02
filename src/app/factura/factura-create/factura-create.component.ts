import { Component, OnInit } from '@angular/core';
import { Asesor } from 'src/app/asesor/asesor';
import { AsesorService } from 'src/app/asesor/asesor.service';
import { Cliente } from 'src/app/cliente/cliente';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { Inventario } from 'src/app/inventario/inventario';
import { InventarioService } from 'src/app/inventario/inventario.service';
import { Producto } from 'src/app/producto/producto';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaProducto } from '../factura-producto';
import { FacturaDetail } from '../factura-detail';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-create',
  templateUrl: './factura-create.component.html',
  styleUrls: ['./factura-create.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class FacturaCreateComponent implements OnInit {

  total: number = 0;
  clientes: Array<Cliente> = [];
  asesores: Array<Asesor> = [];
  inventarios: Array<Inventario> = [];
  productosEscogidos: Array<Producto> = [];
  productosAgregar: Array<Producto> = [];
  productosEliminar: Array<Producto> = [];
  inputValue: number = 1;
  constructor(private clienteService:ClienteService, private asesorService:AsesorService, private inventarioService:InventarioService,
              private facturaService:FacturaService, config: NgbModalConfig, private modalService: NgbModal) { }

  ngOnInit() {
    this.getClientes();
    this.getAsesores();
    this.getInventarios();
  }

  getClientes(){
    this.clienteService.getClientes().subscribe((clientes) =>{
      this.clientes = clientes;
    });
  }

  onKey(event:any, producto:Producto) {this.inputValue = event.target.value; this.total+=producto.valor*this.inputValue;}

  calcularAporte(producto:Producto, input:any){
    console.log(input.value)
    return this.inputValue * producto.valor;
  }

  getAsesores(){
    this.asesorService.getAsesores().subscribe((asesores) =>{
      this.asesores = asesores;
    });
  }

  crearFactura(){
    const facturaProducto = new FacturaProducto(this.productosEscogidos[0],
                                          this.total,
                                          this.inputValue);
    const facturaDetail = new FacturaDetail(this.total, new Date('2022-2-12'), this.total, this.clientes[0], this.asesores[0], [facturaProducto]);
    this.facturaService.createFactura(facturaDetail).subscribe((factura) =>{
      console.log(factura);
      window.location.reload();
    });

  }

  selected(producto:Producto){
    this.productosAgregar.push(producto);
  }

  selectedEscogidos(producto:Producto){
    this.productosEliminar.push(producto);
  }

  agregarProductos(){
    this.productosAgregar.forEach((producto) =>{
      this.productosEscogidos.push(producto);
    });
    this.productosAgregar = [];
    this.modalService.dismissAll();
  }

  getInventarios(){
    this.inventarioService.getInventarios().subscribe((inventarios) =>{
      this.inventarios = inventarios;
    });
  }
  agregar(content:any){
    this.modalService.open(content)
  }
  eliminar(){
    this.productosEliminar.forEach((producto) =>{
      this.productosEscogidos.splice(this.productosEscogidos.indexOf(producto),1);
    });
    this.productosEliminar = [];
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Producto } from "../producto";
import { ProductoService } from "../producto.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})

export class ProductoCreateComponent implements OnInit {

  productoForm: FormGroup;
  constructor(
    private productoService: ProductoService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  createProducto(producto: Producto) {
    if(!this.productoForm.valid)
      return;
    this.productoService.createProducto(producto).
    subscribe(p=>{
      this.productoForm.reset();

    }, err =>{

    }
    )
  }

  cancelCreation(){
    this.productoForm.reset();
  }

  ngOnInit() {

    this.productoForm = this.formBuilder.group({
      codigo: ['', Validators.required],
      nombre: [, Validators.required],
      valor: ['', Validators.required],
      categoria: ['', Validators.required]
    });

  }

  goBack(): void {
    this.router.navigate(['/home']);
  }

}

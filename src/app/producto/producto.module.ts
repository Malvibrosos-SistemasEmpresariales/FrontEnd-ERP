import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductoCreateComponent } from './producto-create/producto-create.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule
  ],
  declarations: [ProductoComponent, ProductoCreateComponent],
  exports: [ProductoComponent]
})
export class ProductoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductoComponent } from './producto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProductoComponent],
  exports: [ProductoComponent]
})
export class ProductoModule { }

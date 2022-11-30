import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InventarioComponent],
  exports: [InventarioComponent]
})
export class InventarioModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { InventarioListComponent } from './inventario-list/inventario-list.component';
import { InventarioListSingleComponent } from './inventario-list-single/inventario-list-single.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InventarioComponent, InventarioListComponent, InventarioListSingleComponent],
  exports: [InventarioComponent]
})
export class InventarioModule { }

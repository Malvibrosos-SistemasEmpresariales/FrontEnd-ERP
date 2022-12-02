import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventarioComponent } from './inventario.component';
import { InventarioListComponent } from './inventario-list/inventario-list.component';
import { InventarioListSingleComponent } from './inventario-list-single/inventario-list-single.component';
import { InventarioCreateComponent } from './inventario-create/inventario-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [InventarioComponent, InventarioListComponent, InventarioListSingleComponent, InventarioCreateComponent],
  exports: [InventarioComponent]
})
export class InventarioModule { }

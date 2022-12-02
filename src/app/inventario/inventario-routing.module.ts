import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioListComponent } from './inventario-list/inventario-list.component';
import { InventarioListSingleComponent } from './inventario-list-single/inventario-list-single.component';
import { InventarioCreateComponent } from './inventario-create/inventario-create.component';

const routes: Routes = [
  {
    path: 'inventarios/',
    component: InventarioListComponent,
  },
  {
    path: 'inventarios/create',
    component: InventarioCreateComponent
  },
  {
    path: 'inventarios/:id',
    component: InventarioListSingleComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}

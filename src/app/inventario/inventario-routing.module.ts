import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventarioListComponent } from './inventario-list/inventario-list.component';
import { InventarioListSingleComponent } from './inventario-list-single/inventario-list-single.component';

const routes: Routes = [
  {
    path: 'inventarios',
    children: [
      {
        path: 'list',
        component: InventarioListComponent,
      },
      {
        path: ':id',
        component: InventarioListSingleComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InventarioRoutingModule {}

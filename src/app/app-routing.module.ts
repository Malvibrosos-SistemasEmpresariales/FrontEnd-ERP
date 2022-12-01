import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaListComponent } from './factura/factura-list/factura-list.component';

const routes: Routes = [
  { path: 'facturas', component: FacturaListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

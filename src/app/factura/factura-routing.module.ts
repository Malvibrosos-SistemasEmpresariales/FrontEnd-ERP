import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaListComponent } from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';


const routes: Routes = [{
 path: 'facturas',
 children: [
   {
     path: 'list',
     component: FacturaListComponent
   },
   {
    path:'create',
    component: FacturaCreateComponent
   },
   {
     path: ':id',
     component: FacturaDetailComponent
   },

 ]
}];

@NgModule({
 imports: [RouterModule.forChild(routes)],
 exports: [RouterModule]
})
export class FacturaRoutingModule { }

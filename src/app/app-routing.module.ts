import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturaListComponent } from './factura/factura-list/factura-list.component';
import { InventarioListComponent } from './inventario/inventario-list/inventario-list.component';
import { HomeComponent } from './home/home.component';
import { ProductoCreateComponent } from './producto/producto-create/producto-create.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'facturas', component: FacturaListComponent },
  { path: 'productos/crear', component: ProductoCreateComponent },
  { path: 'inventarios', component: InventarioListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

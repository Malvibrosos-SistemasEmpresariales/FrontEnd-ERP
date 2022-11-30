import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaModule } from './factura/factura.module';
import { InventarioModule } from './inventario/inventario.module';
import { ProductoModule } from './producto/producto.module';
import { IslaModule } from './isla/isla.module';
import { ClienteModule } from './cliente/cliente.module';
import { AsesorModule } from './asesor/asesor.module';

@NgModule({
  declarations: [
    AppComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacturaModule,
    InventarioModule,
    ProductoModule,
    IslaModule,
    ClienteModule,
    AsesorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

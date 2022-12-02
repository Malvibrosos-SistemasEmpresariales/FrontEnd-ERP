import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacturaModule } from './factura/factura.module';
import { InventarioModule } from './inventario/inventario.module';
import { ProductoModule } from './producto/producto.module';
import { IslaModule } from './isla/isla.module';
import { ClienteModule } from './cliente/cliente.module';
import { AsesorModule } from './asesor/asesor.module';
import { FacturaRoutingModule } from './factura/factura-routing.module';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FacturaModule,
    InventarioModule,
    ProductoModule,
    IslaModule,
    ClienteModule,
    AsesorModule,
    HttpClientModule,
    FacturaRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaComponent],
  exports: [FacturaComponent]
})
export class FacturaModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { FacturaListComponent} from './factura-list/factura-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaComponent, FacturaListComponent],
  exports: [FacturaComponent, FacturaListComponent]
})
export class FacturaModule { }

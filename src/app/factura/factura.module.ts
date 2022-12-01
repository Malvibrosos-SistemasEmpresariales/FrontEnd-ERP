import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaComponent } from './factura.component';
import { FacturaListComponent} from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaComponent, FacturaListComponent, FacturaDetailComponent],
  exports: [FacturaComponent, FacturaListComponent, FacturaDetailComponent]
})
export class FacturaModule { }

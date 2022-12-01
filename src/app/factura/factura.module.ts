import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent} from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent],
  exports: [FacturaListComponent, FacturaDetailComponent]
})
export class FacturaModule { }

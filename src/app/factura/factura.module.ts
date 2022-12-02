import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacturaListComponent} from './factura-list/factura-list.component';
import { FacturaDetailComponent } from './factura-detail/factura-detail.component';
import { FacturaCreateComponent } from './factura-create/factura-create.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent],
  exports: [FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent]
})
export class FacturaModule { }

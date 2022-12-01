import { Component, OnInit, Input } from '@angular/core';
import { FacturaDetail } from '../factura-detail';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css'],
  providers: [NgbModalConfig, NgbModal],
})
export class FacturaDetailComponent implements OnInit {

  @Input() factura!: FacturaDetail;

  constructor(private facturaService: FacturaService,config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  eliminar(content:any){
    this.modalService.open(content);
  }

  eliminarConfirmo(){
    this.facturaService.deleteFactura(this.factura.id).subscribe();
    window.location.reload();
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';
import { FacturaDetail } from '../factura-detail';
import { FacturaService } from '../factura.service';

@Component({
  selector: 'app-factura-list',
  templateUrl: './factura-list.component.html',
  styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

  selectedFactura!: FacturaDetail;
  selected: boolean = false;
  filtro: string = 'Filtro';
  isFilterNotOn: Boolean = true;
  facturas: Array<FacturaDetail> = [];
  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.getFacturas();
  }

  changeFilter(filtro: string): void{
    this.filtro = filtro;
    this.isFilterNotOn = filtro === 'Filtro' ? true : false;
    if (this.isFilterNotOn){
      this.getFacturas();
    }
  }

  onSelected(factura: FacturaDetail): void{
    this.facturaService.getFacturaById(factura.id).subscribe((facturaDetail) =>{
      this.selectedFactura = facturaDetail;
      this.selected = true;
    });
  }

  applyFilter(filtro:string): void{
    if (this.filtro === 'Fecha'){
      this.getFacturasByDate(filtro);
    }else if (this.filtro === 'Factura'){
      this.getFacturaByIdFactura(filtro);
    }
  }

  getFacturasByDate(date: string): void{
    this.facturaService.getFacturasByDate(date).subscribe((facturas) =>{
      this.facturas = facturas;
    })
  }

  getFacturaByIdFactura(id: string): void{
    this.facturaService.getFacturaById(parseInt(id)).subscribe((factura) =>{
      this.facturas = [factura];
    })
  }

  getFacturas(): void{
    this.facturaService.getFacturas().subscribe((facturas) =>{
      this.facturas = facturas;
    })
  }
}

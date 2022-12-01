import { Component, OnInit, Input } from '@angular/core';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura-detail',
  templateUrl: './factura-detail.component.html',
  styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit {

  @Input() factura!: Factura;

  constructor() { }

  ngOnInit() {
  }

}

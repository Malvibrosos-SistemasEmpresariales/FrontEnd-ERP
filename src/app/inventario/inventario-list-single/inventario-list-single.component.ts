import { Component, OnInit } from '@angular/core';
import { Inventario } from '../inventario';

@Component({
  selector: 'app-inventario-list-single',
  templateUrl: './inventario-list-single.component.html',
  styleUrls: ['./inventario-list-single.component.css']
})
export class InventarioListSingleComponent implements OnInit {
  inventarios: Inventario[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

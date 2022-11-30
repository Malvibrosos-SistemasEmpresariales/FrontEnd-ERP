import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Factura } from './factura';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl: string = environment.baseUrl + 'facturas';
  constructor(private http: HttpClient) { }
  getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.apiUrl);
  }

}

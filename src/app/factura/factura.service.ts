import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Factura } from './factura';
import { Observable } from 'rxjs';
import { FacturaDetail } from './factura-detail';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private apiUrl: string = environment.baseUrl + 'facturas';
  constructor(private http: HttpClient) { }
  getFacturas(): Observable<FacturaDetail[]>{
    return this.http.get<FacturaDetail[]>(this.apiUrl);
  }

  getFacturasByDate(date: string): Observable<FacturaDetail[]>{
    return this.http.get<FacturaDetail[]>(this.apiUrl + '/date/' + date);
  }

  getFacturaById(id: number): Observable<FacturaDetail>{
    return this.http.get<FacturaDetail>(this.apiUrl + '/' + id);
  }

}

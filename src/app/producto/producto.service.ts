import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private apiUrl: string = environment.baseUrl + 'productos';
  constructor(private http: HttpClient) { }
  getProductos(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.apiUrl);
  }
  createProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.apiUrl+"/", producto);
  }

  getProducto(id: string): Observable<Producto>{
    return this.http.get<Producto>(this.apiUrl + "/" + id);
  }
}

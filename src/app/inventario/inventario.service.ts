import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Inventario } from './inventario';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  private apiUrl: string = environment.baseUrl + 'inventarios';
  constructor(private http: HttpClient) { }
  getInventarios(): Observable<Inventario[]>{
    return this.http.get<Inventario[]>(this.apiUrl);
  }

}

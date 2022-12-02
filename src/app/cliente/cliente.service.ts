import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private apiUrl: string = environment.baseUrl + 'clientes';
  constructor(private http: HttpClient) { }
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.apiUrl);
  }

}

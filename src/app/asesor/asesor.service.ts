import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Asesor } from './asesor';
@Injectable({
  providedIn: 'root'
})
export class AsesorService {

  private apiUrl: string = environment.baseUrl + 'asesores';
  constructor(private http: HttpClient) { }
  getAsesores(): Observable<Asesor[]>{
    return this.http.get<Asesor[]>(this.apiUrl);
  }

}

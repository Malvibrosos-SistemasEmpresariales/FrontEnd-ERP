import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Isla } from './isla';

@Injectable({
  providedIn: 'root'
})
export class IslaService {

  private apiUrl: string = environment.baseUrl + 'islas';
  constructor(private http: HttpClient) { }

  getIslas(): Observable<Isla[]>{
    return this.http.get<Isla[]>(this.apiUrl);
  }

}

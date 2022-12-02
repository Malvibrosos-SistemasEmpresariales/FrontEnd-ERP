import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Inventario } from "./inventario";
import { InventarioMovimientos } from "./inventario-movimientos";
import { Observable } from "rxjs";


@Injectable({
  providedIn: "root"
})
export class InventarioService {
  private apiUrl: string = environment.baseUrl + "inventarios";
  constructor(private http: HttpClient) {}

  getInventarios(): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl);
  }

  getInventarioById(id: number): Observable<Inventario> {
    return this.http.get<Inventario>(this.apiUrl + "/" + id);
  }

  getInventarioMovimientos(id: number): Observable<InventarioMovimientos[]> {
    return this.http.get<InventarioMovimientos[]>(
      this.apiUrl + "/" + id + "/movimientos"
    );
  }

  deleteInventario(id: number): Observable<string> {
    return this.http.delete<string>(this.apiUrl + "/" + id);
  }

  getInventariosByDate(date: string): Observable<Inventario[]> {
    return this.http.get<Inventario[]>(this.apiUrl + "/date/" + date);
  }

  getInventariosMovimientos(): Observable<InventarioMovimientos[]> {
    return this.http.get<InventarioMovimientos[]>(this.apiUrl + "/movimientos");
  }
}

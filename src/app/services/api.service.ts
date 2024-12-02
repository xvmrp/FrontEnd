import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://127.0.0.1:8000'; // Cambia por tu URL base

  constructor(private http: HttpClient) {}

  // Métodos para cada endpoint
  generarGastos(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/generar-gastos/`, data);
  }

  pagarGasto(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/pagar-gasto/`, data);
  }

  verPagos(params: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/ver-pagos/`, { params });
  }

  verGastos(params: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/ver-gastos/`, { params });
  }

  eliminarTodos(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/eliminar-todos/`);
  }

  verGastosNoPagados(params: any): Observable<any> {
    return this.http.get(`${this.baseUrl}/ver-gastos-no-pagados/`, { params });
  }
}

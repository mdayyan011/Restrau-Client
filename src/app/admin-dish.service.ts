import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AdminDish } from './admin-dish';
import { environment } from 'src/environment';
@Injectable({
  providedIn: 'root',
})
export class AdminDishService {
  constructor(private http: HttpClient) {}

  public findAllDish(): Observable<AdminDish[]> {
    return this.http.get<AdminDish[]>(`${environment.apiUrl}/dishitems`);
  }

  findByDishId(id: number): Observable<AdminDish> {
    return this.http.get<AdminDish>(`${environment.apiUrl}/dishitems/${id}`);
  }

  getAllDishByCategoryId(id: number): Observable<AdminDish> {
    return this.http.get<AdminDish>(
      `${environment.apiUrl}/dishesbycatid/${id}`
    );
  }

  createDish(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/dishitem`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updatedish(payload: AdminDish) {
    return this.http.put(
      `${environment.apiUrl}/dishitems/${payload._dishId}`,
      payload
    );
  }

  deleteDish(id: Number) {
    const url = `${environment.apiUrl}/deletedish/${id}`;
    return this.http.delete<AdminDish>(url);
  }
}

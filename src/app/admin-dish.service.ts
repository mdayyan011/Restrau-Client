import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { AdminDish } from './admin-dish';
@Injectable({
  providedIn: 'root'
})
export class AdminDishService {

  constructor(private http: HttpClient) { }

  public findAllDish(): Observable<AdminDish[]> {
    return this.http.get<AdminDish[]>(`http://localhost:9090/api/dishitems`);
  }

  findByDishId(id: number): Observable<AdminDish> {
    return this.http.get<AdminDish>(`http://localhost:9090/api/dishitems/${id}`);
  }

  getAllDishByCategoryId(id: number): Observable<AdminDish> {
    return this.http.get<AdminDish>(`http://localhost:9090/api/dishesbycatid/${id}`);
  }

  createDish(data: any) {
    return (
      this.http
        .post<any>('http://localhost:9090/api/dishitem', data)
        .pipe(
          map((res: any) => {
            return res;
          })
        )
    );
  }

  updatedish(payload: AdminDish) {
    return this.http.put(
      `http://localhost:9090/api/dishitems/${payload._dishId}`,
      payload
    );
  }

  deleteDish(id:Number){
    
    const url =`http://localhost:9090/api/deletedish/${id}`
    return this.http.delete<AdminDish>(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminCategory } from './admin-category';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminCategoryService {

  constructor(private http: HttpClient) { }
  
  public findAllCategory(): Observable<AdminCategory[]> {
    return this.http.get<AdminCategory[]>(`http://localhost:9090/api/categoryitems`);
  }

  createCategory(data: any) {
    return (
      this.http
        .post<any>('http://localhost:9090/api/categoryitems', data)
        .pipe(
          map((res: any) => {
            return res;
          })
        )
    );
  }

 getById(id: number): Observable<AdminCategory[]> {
   return this.http.get<AdminCategory[]>(`http://localhost:9090/api/categoriesbymenuid/${id}`);
     }

  findByCategoryId(id: number): Observable<AdminCategory> {
    return this.http.get<AdminCategory>(`http://localhost:9090/api/categoryitems/${id}`);
  }

  updatecategory(payload: AdminCategory) {
    console.log(payload);
    return this.http.put(
      `http://localhost:9090/api/categoryitems/${payload._categoryId}`, payload
    );
  }
}

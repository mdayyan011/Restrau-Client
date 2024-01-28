import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AdminCategory } from './admin-category';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminCategoryService {
  constructor(private http: HttpClient) {}

  public findAllCategory(): Observable<AdminCategory[]> {
    return this.http.get<AdminCategory[]>(
      `${environment.apiUrl}/categoryitems`
    );
  }

  createCategory(data: any) {
    return this.http
      .post<any>(`${environment.apiUrl}/categoryitems`, data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }

  getById(id: number): Observable<AdminCategory[]> {
    return this.http.get<AdminCategory[]>(
      `${environment.apiUrl}categoriesbymenuid/${id}`
    );
  }

  findByCategoryId(id: number): Observable<AdminCategory> {
    return this.http.get<AdminCategory>(
      `${environment.apiUrl}categoryitems/${id}`
    );
  }

  updatecategory(payload: AdminCategory) {
    console.log(payload);
    return this.http.put(
      `${environment.apiUrl}categoryitems/${payload._categoryId}`,
      payload
    );
  }
}

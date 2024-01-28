import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AdminMenu } from './admin-menu';
import { environment } from 'src/environment';

@Injectable({
  providedIn: 'root',
})
export class AdminMenuService {
  constructor(private http: HttpClient) {}

  // api call to fetch all menus
  public getAllMenus(): Observable<AdminMenu[]> {
    return this.http.get<AdminMenu[]>(`${environment.apiUrl}/menuitems`);
  }

  // api call to  create a new menu
  public createMenu(data: any) {
    return this.http.post<any>(`${environment.apiUrl}/menuitem`, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  // api call to menu by Id
  findByMenuId(id: number): Observable<AdminMenu> {
    console.log('----------------------------  ' + id);
    return this.http.get<AdminMenu>(`${environment.apiUrl}/menuitems/${id}`);
  }

  // api call to update menu
  updatemenu(payload: AdminMenu) {
    return this.http.put(
      `${environment.apiUrl}/menuitems/${payload._menuId}`,
      payload
    );
  }
}

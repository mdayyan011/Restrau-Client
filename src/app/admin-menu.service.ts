import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AdminMenu } from './admin-menu';


@Injectable({
  providedIn: 'root'
})
export class AdminMenuService {

  constructor(private http: HttpClient) { }

  // api call to fetch all menus
  public getAllMenus(): Observable<AdminMenu[]> {
    return this.http.get<AdminMenu[]>(`http://localhost:9090/api/menuitems`);
  }

  // api call to  create a new menu
  public createMenu(data: any) {
    return (
      this.http
        .post<any>('http://localhost:9090/api/menuitem', data)
        .pipe(
          map((res: any) => {
            return res;
          })
        )
    );
  }

  // api call to menu by Id
  findByMenuId(id: number): Observable<AdminMenu> {
    console.log("----------------------------  "+id);
    return this.http.get<AdminMenu>(`http://localhost:9090/api/menuitems/${id}`);
  }

  // api call to update menu
  updatemenu(payload: AdminMenu) {
    return this.http.put(
      `http://localhost:9090/api/menuitems/${payload._menuId}`, payload
    );
  }
}

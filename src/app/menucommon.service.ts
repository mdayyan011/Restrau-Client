import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menucommon } from './menucommon';

@Injectable({
  providedIn: 'root'
})
export class MenucommonService {
 
  constructor(private http:HttpClient) { }

  // fetching all menu from findAllMenu api
  public getAllMenu():Observable<Menucommon[]>{
    return this.http.get<Menucommon[]>(`http://localhost:9090/api/common`)
  }

  
}

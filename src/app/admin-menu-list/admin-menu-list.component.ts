import { Component } from '@angular/core';
import { AdminMenu } from '../admin-menu';
import { AdminMenuService } from '../admin-menu.service';

@Component({
  selector: 'app-admin-menu-list',
  templateUrl: './admin-menu-list.component.html',
  styleUrls: ['./admin-menu-list.component.css']
})
export class AdminMenuListComponent {
  menus:AdminMenu[] | any; 
  constructor(private adminMenuService: AdminMenuService) {}

  ngOnInit() {
    // call service to call fetching api
    this.adminMenuService.getAllMenus().subscribe((res: AdminMenu[]) => {
      this.menus= res;
      
    });
  }
 
  filterString1 ='';
  changeByProperty() {
    this.menus[0]
  }

  menuDetails(id: number){
    this.menus.navigate(['menu-details', id]);
  }

}

import { Component } from '@angular/core';
import { AdminDish } from '../admin-dish';
import { AdminDishService } from '../admin-dish.service';
import { Router } from '@angular/router';
import { AdminMenu } from '../admin-menu';
import { AdminMenuService } from '../admin-menu.service';
import { AdminCategoryService } from '../admin-category.service';
import { AdminCategory } from '../admin-category';

@Component({
  selector: 'app-admin-dish-create',
  templateUrl: './admin-dish-create.component.html',
  styleUrls: ['./admin-dish-create.component.css']
})
export class AdminDishCreateComponent {

  dishForm: AdminDish = {
    _menuId:0,
    _categoryId:0,
    _dishId: 0,
    _dishName: '',
    _dishDescription: '',
    _price: 0,
    _dishImage: '',
    _nature: ''
  };

  menus:AdminMenu[] | any; 
  categories: AdminCategory[] | any; 

  constructor(private dishService: AdminDishService, 
    private adminMenuService: AdminMenuService,
    private adminCategoryService: AdminCategoryService,
    private router: Router) {}

  ngOnInit() {
 // call service to call fetching api
 this.adminMenuService.getAllMenus().subscribe((res: AdminMenu[]) => {
  this.menus= res; 
})


this.adminCategoryService.findAllCategory().subscribe((res: AdminCategory[]) => {
  this.categories = res;
});

  }
 
  create() {
    this.dishService.createDish(this.dishForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-dish-create']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

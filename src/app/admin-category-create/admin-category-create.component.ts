import { Component } from '@angular/core';
import { AdminCategory } from '../admin-category';
import { AdminCategoryService } from '../admin-category.service';
import { Router } from '@angular/router';
import { AdminMenuService } from '../admin-menu.service';
import { AdminMenu } from '../admin-menu';

@Component({
  selector: 'app-admin-category-create',
  templateUrl: './admin-category-create.component.html',
  styleUrls: ['./admin-category-create.component.css']
})
export class AdminCategoryCreateComponent {
  categoryForm: AdminCategory = {
    _menuId:0,
    _categoryId: 0,
    _categoryName: '',
    _categoryDescription: '',
    _categoryImage: '',
  };
 
  menus:AdminMenu[] | any; 

  constructor(private adminCategoryService: AdminCategoryService, 
    private adminMenuService: AdminMenuService,
    private router: Router) {}

    ngOnInit() {
      // call service to call fetching api
      this.adminMenuService.getAllMenus().subscribe((res: AdminMenu[]) => {
        this.menus= res; 
    })
  }


  create() {
    this.adminCategoryService.createCategory(this.categoryForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-category-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

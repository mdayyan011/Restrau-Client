import { Component } from '@angular/core';
import { AdminCategory } from '../admin-category';
import { AdminCategoryService } from '../admin-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-update',
  templateUrl: './admin-category-update.component.html',
  styleUrls: ['./admin-category-update.component.css']
})
export class AdminCategoryUpdateComponent {
  categoryForm: AdminCategory = {
    _menuId:0,
    _categoryId: 0,
    _categoryName: '',
    _categoryDescription: '',
    _categoryImage: '',
  };
  constructor(
    private adminCategoryService: AdminCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.findByCategoryId(id);
    });
  }
  
  findByCategoryId(id: number) {
    this.adminCategoryService.findByCategoryId(id).subscribe((data) => {
      this.categoryForm = data;
    });
  }
  
  updatecategory() {
    this.adminCategoryService.updatecategory(this.categoryForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-category-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

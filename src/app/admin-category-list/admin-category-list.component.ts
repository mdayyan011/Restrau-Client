import { Component } from '@angular/core';
import { AdminCategory } from '../admin-category';
import { AdminCategoryService } from '../admin-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent {
  categories: AdminCategory[] | any; 
  constructor(private adminCategoryService: AdminCategoryService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.adminCategoryService.findAllCategory().subscribe((res: AdminCategory[]) => {
      this.categories = res;
    });
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      console.log("_--------------- ",param.get('id'))
      console.log("id===== ",id)
      if(id>0)
      {
      this.getById(id);
      }
    });
  } getById(id: number) {
    this.adminCategoryService.getById(id).subscribe((data) => {
      this.categories = data;
    });
  }

  allCategory: AdminCategory[] = [];

  filterString3 = '';
  changeByProperty() {
    this.categories[0]

  }

  menuDetails(id: number) {
    this.categories.navigate(['category-details', id]);
  }
}

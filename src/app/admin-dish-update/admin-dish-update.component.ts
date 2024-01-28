import { Component } from '@angular/core';
import { AdminDish } from '../admin-dish';
import { AdminDishService } from '../admin-dish.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dish-update',
  templateUrl: './admin-dish-update.component.html',
  styleUrls: ['./admin-dish-update.component.css']
})
export class AdminDishUpdateComponent {

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
  constructor(
    private dishService: AdminDishService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.findByDishId(id);
    });
  }

  findByDishId(id: number) {
    this.dishService.findByDishId(id).subscribe((data) => {
      console.log(data);
      this.dishForm = data;
    });
  }

  updatedish() {
    this.dishService.updatedish(this.dishForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-dish-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

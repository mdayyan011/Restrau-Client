import { Component } from '@angular/core';
import { AdminDish } from '../admin-dish';
import { AdminDishService } from '../admin-dish.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dish-list',
  templateUrl: './admin-dish-list.component.html',
  styleUrls: ['./admin-dish-list.component.css']
})
export class AdminDishListComponent {
  dish:AdminDish[] | any;
  todaydate = new Date();
  constructor(private adminDishService: AdminDishService ,private route: ActivatedRoute,private router: Router) {}

  ngOnInit(): void {
    
    this.adminDishService.findAllDish().subscribe((res: AdminDish[]) => {
      this.dish= res;
    });
       this.route.paramMap.subscribe((param) =>{

   var id=Number(param.get('id'));
 

     if(id>0)
     this.getAllDishByCategoryId(id);
    });
    }

    getAllDishByCategoryId(id: number) { 
    this.adminDishService.getAllDishByCategoryId(id).subscribe((data) =>{
    this.dish = data;
   });
   }

   deleteDish(_dishId:Number){
    this.adminDishService.deleteDish(_dishId).subscribe();
    this.ngOnInit();
    this.router.navigate(["/admin-dish-list"]);
   }




allMenus: AdminDish[] = [];
 
  filterString2 ='';
  changeByProperty() {
    this.dish[0]

  }
 
}

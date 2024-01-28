import { Component } from '@angular/core'; 
import { AdminMenu } from '../admin-menu';
import { AdminMenuService } from '../admin-menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu-create',
  templateUrl: './admin-menu-create.component.html',
  styleUrls: ['./admin-menu-create.component.css']
})
export class AdminMenuCreateComponent {
  menuForm: AdminMenu = {
    _menuId: 0,
    _menuName: '',
    _menuDescription: '',
    _menuImage: '',
  };

  constructor(private adminMenuService: AdminMenuService, private router: Router) {}

  ngOnInit(): void {}
  
  createNewMenu() {
    this.adminMenuService.createMenu(this.menuForm).subscribe({
      next: (data) => { 
        this.router.navigate(['/admin-menu-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

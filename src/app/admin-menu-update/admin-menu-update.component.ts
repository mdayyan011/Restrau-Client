import { Component } from '@angular/core';
import { AdminMenu } from '../admin-menu';
import { AdminMenuService } from '../admin-menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-menu-update',
  templateUrl: './admin-menu-update.component.html',
  styleUrls: ['./admin-menu-update.component.css']
})
export class AdminMenuUpdateComponent {
  menuForm: AdminMenu = {
    _menuId: 0,
    _menuName: '',
    _menuDescription: '',
    _menuImage: '',
  };
  constructor(
    private adminMenuService: AdminMenuService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.findByMenuId(id);
    });
  }

  findByMenuId(id: number) {
    this.adminMenuService.findByMenuId(id).subscribe((data) => {
      console.log(data);
      this.menuForm = data;
    });
  }

  updatemenu() {
    this.adminMenuService.updatemenu(this.menuForm).subscribe({
      next: (data) => {
        this.router.navigate(['/admin-menu-list']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

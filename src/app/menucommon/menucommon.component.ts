import { Component } from '@angular/core';
import { MenucommonService } from '../menucommon.service';
import { Menucommon } from '../menucommon';

@Component({
  selector: 'app-menucommon',
  templateUrl: './menucommon.component.html',
  styleUrls: ['./menucommon.component.css']
})
export class MenucommonComponent {

    menus:Menucommon[]=[];
    constructor(private menuCommonService: MenucommonService){}

    filterString ='';
    changeByProperty() {
      this.menus[0]
    }
    ngOnInit(){      
      this.menuCommonService.getAllMenu().subscribe((res:Menucommon[])=>{
        this.menus = res;
      })
    }
}

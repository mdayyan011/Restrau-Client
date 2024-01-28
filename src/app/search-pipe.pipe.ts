import { Pipe, PipeTransform } from '@angular/core';
import { Menucommon } from './menucommon'; 
import { AdminMenu } from './admin-menu';
import { AdminDish } from './admin-dish';
import { AdminCategory } from './admin-category';

@Pipe({
  name: 'searchPipe',
  pure: true,
})
export class SearchPipePipe implements PipeTransform {
  
  transform(menucommon: Menucommon[], filterString: String) { 
      console.log("In pipe");
    if (menucommon.length == 0 || filterString == '') {
      return menucommon;
    } else {
      return menucommon.filter((me) => {
        return (
          me._menuName.toLowerCase() === filterString.toLowerCase() ||
          me._categoryName.toLowerCase() === filterString.toLowerCase() ||
          me._dishNature.toLowerCase() === filterString.toLowerCase() ||
          me._dishName.toLowerCase() === filterString.toLowerCase()
        );
      });
    }
  }
}

@Pipe({
  name: 'searchPipe1',
  pure: true,
})
export class SearchPipePipe1 implements PipeTransform {
  transform(menu: AdminMenu[], filterString1: String) { 
    if ((menu && menu.length == 0) || filterString1 == '') {
      return menu;
    } else {
      var menu = menu.filter((me) => {
        return (
          me._menuName.toLowerCase().includes(filterString1.toLowerCase()) ||
          me._menuDescription.toLowerCase().includes(filterString1.toLowerCase())
        );
      });
      return menu;
    }
  }
}

@Pipe({
  name: 'searchPipe2',
  pure: true,
})
export class SearchPipePipe2 implements PipeTransform {
  transform(dish: AdminDish[], filterString2: String) {
    console.log('Filter pipe called! string '+filterString2);
    if ((dish && dish.length == 0) || filterString2 == '') {
      return dish;
    } else {
      var dishes = dish.filter((d) => { 
        return (
          d._dishName.toLowerCase().includes(filterString2.toLowerCase()) ||
          d._dishDescription.toLowerCase().includes(filterString2.toLowerCase()) ||
          d._nature.toLowerCase().includes(filterString2.toLowerCase())
        );
      });
      return dishes;
    }
  }
}

@Pipe({
  name: 'searchPipe3',
  pure: true,
})
export class SearchPipePipe3 implements PipeTransform {
  transform(category: AdminCategory[], filterString3: String) {
    console.log('Filter pipe called!');
    if ((category && category.length == 0) || filterString3 == '') {
      return category;
    } else {
      var category = category.filter((cat) => {
        return (
          cat._categoryName.toLowerCase().includes(filterString3.toLowerCase()) ||
          cat._categoryDescription.toLowerCase().includes(filterString3.toLowerCase())
        );
      });
      return category;
    }
  }
}

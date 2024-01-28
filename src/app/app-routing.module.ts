import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenucommonComponent } from './menucommon/menucommon.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AdminMenuCreateComponent } from './admin-menu-create/admin-menu-create.component';
import { AdminMenuUpdateComponent } from './admin-menu-update/admin-menu-update.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminCategoryCreateComponent } from './admin-category-create/admin-category-create.component';
import { AdminCategoryUpdateComponent } from './admin-category-update/admin-category-update.component';
import { AdminDishListComponent } from './admin-dish-list/admin-dish-list.component';
import { AdminDishCreateComponent } from './admin-dish-create/admin-dish-create.component';
import { AdminDishUpdateComponent } from './admin-dish-update/admin-dish-update.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'menu-common',component:MenucommonComponent}, 
  {path:'admin-dashboard',component:AdmindashboardComponent}, 
  {path:'admin-menu-list',component:AdminMenuListComponent}, 
  { path: 'admin-menu-create', component: AdminMenuCreateComponent },
  { path: 'admin-menu-update/:id', component: AdminMenuUpdateComponent },
  { path: 'admin-category-list', component: AdminCategoryListComponent },
  { path: 'admin-category-listbyId/:id', component: AdminCategoryListComponent},
  { path: 'admin-category-create', component: AdminCategoryCreateComponent },
  { path: 'admin-category-update/:id', component: AdminCategoryUpdateComponent },
  { path: 'admin-dish-list', component: AdminDishListComponent },
  { path: 'admin-dish-create', component: AdminDishCreateComponent },
  { path: 'admin-dish-udpate/:id', component: AdminDishUpdateComponent },
  { path: 'admin-menu-listByCatId/:id', component: AdminDishListComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

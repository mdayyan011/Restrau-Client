import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component'; 
import { MenucommonComponent } from './menucommon/menucommon.component';
import {HttpClientModule} from '@angular/common/http';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AdminMenuCreateComponent } from './admin-menu-create/admin-menu-create.component';
import { AdminDishCreateComponent } from './admin-dish-create/admin-dish-create.component';
import { AdminCategoryCreateComponent } from './admin-category-create/admin-category-create.component';
import { SearchPipePipe, SearchPipePipe1, SearchPipePipe2, SearchPipePipe3 } from './search-pipe.pipe'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminMenuUpdateComponent } from './admin-menu-update/admin-menu-update.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminCategoryUpdateComponent } from './admin-category-update/admin-category-update.component';
import { AdminDishListComponent } from './admin-dish-list/admin-dish-list.component';
import { AdminDishUpdateComponent } from './admin-dish-update/admin-dish-update.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'; 
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent, 
    MenucommonComponent, 
    AdmindashboardComponent, 
    AdminMenuListComponent, 
    AdminMenuCreateComponent,
     AdminDishCreateComponent, 
    AdminCategoryCreateComponent, 
    SearchPipePipe,
    SearchPipePipe1, 
    SearchPipePipe2,
    SearchPipePipe3,
    AdminMenuUpdateComponent, 
    AdminCategoryListComponent, AdminCategoryUpdateComponent, AdminDishListComponent, AdminDishUpdateComponent, AdminLoginComponent, AboutComponent, ContactComponent, PageNotFoundComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

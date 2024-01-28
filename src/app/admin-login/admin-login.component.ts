import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminLoginService } from '../admin-login.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  loginForm = new FormGroup({
    user_email: new FormControl(null, Validators.required),
    user_password: new FormControl(null, Validators.required),
  }); 
   

  get user_email() {
    return this.loginForm.get('user_email');
  }

  get user_password() {
    return this.loginForm.get('user_password');
  }

  constructor(private adminLoginService: AdminLoginService,
    private router:Router
    ){}

    ngOnInit(){
      if(localStorage.getItem("isAuthenticated")==="true")
      {
        this.router.navigate(['/admin-dashboard']); 
      } 
      
    }
  loginUser(){ 
    // calling service to call authUser api
    this.adminLoginService.authUser(this.loginForm.value).subscribe({
      next: (data) => { 
        console.log("data is --------- "+data);

        if(data)   {
        localStorage.setItem("isAuthenticated", "true");
        console.log("-----------------**************** ",localStorage.getItem("isAuthenticated"));
        this.router.navigate(['/admin-dashboard']); 
        }        
        else
          alert("Invalid Credentials");
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}

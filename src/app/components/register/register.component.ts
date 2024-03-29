import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private router:Router){}

  registerNewUser(){
    console.log("Register User Successful!");
    this.router.navigateByUrl('login');
  }
}

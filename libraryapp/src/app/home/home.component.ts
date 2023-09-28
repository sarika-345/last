import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private route:Router){}
  title = 'libraryapp';
  isAuthenticated=false;
  ngOnInit(){
    if("token" in localStorage)
    {
      this.isAuthenticated=true;
    }
    else{
      this.isAuthenticated=false;
    }
  }
  view(){
    this.route.navigate(['view'])
  }
  add(){
    this.route.navigate(['add'])
  }
  reg(){
    this.route.navigate(['reg'])
  }
  log(){
    this.route.navigate(['log'])
  }
logout(){
  localStorage.clear()
  console.log(localStorage.getItem("token"))
  this.ngOnInit()
}
}

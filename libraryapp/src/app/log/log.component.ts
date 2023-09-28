import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent {
  constructor(private logapi:ApicallService,private route:Router){}
  data={
    username:"",
    password:""
  }
  onsubmit()
  {
    console.log(this.data)
    this.logapi.login(this.data).subscribe((res)=>
    {
      console.log(res);
      localStorage.setItem("token","Token "+res.token) //'token':"Token 56567"
      console.log(localStorage.getItem('token'));
      this.route.navigate(["home"])
    })
  }

}

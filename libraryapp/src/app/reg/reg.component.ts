import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent {
  constructor(private regapi:ApicallService,private route:Router){}
  data={
    username:"",
    password:""
  }
  onsubmit()
  {
    console.log(this.data)
    this.regapi.register(this.data).subscribe((res)=>
    {console.log(res);
    this.route.navigate(['home'])


    })
  }



}

import { Component } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(private postapi:ApicallService,private route:Router,private router:ActivatedRoute){}
  data={'title':"",
  'author':"",
  'price':""
  }
  id:any;
  ngOnInit()
  {
    this.id=this.router.snapshot.paramMap.get("id")
    console.log(this.id);
    if(this.id)
    this.postapi.getbooksbyid(this.id).subscribe((res)=>{
    console.log(res);
    this.data=res;

    })
  }
    onsubmit()
    {
      if(this.id){
        this.postapi.editbookbyid(this.id,this.data).subscribe((res)=>
        {
          console.log(res);
          this.route.navigate(['view'])
        })
      }
      else{
    console.log(this.data);
    this.postapi.postbook(this.data).subscribe((res)=>
    {
    console.log(res);
    this.route.navigate(['view'])
    })
  }}

}

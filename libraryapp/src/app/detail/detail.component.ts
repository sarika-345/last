import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  id:any;
  data:any;
  constructor(private route:ActivatedRoute,private detailapi:ApicallService){}
  ngOnInit()
  {
    this.id=this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.detailapi.getbooksbyid(this.id).subscribe((res)=>
    {
      console.log(res);
      this.data=res;
      console.log(this.data);
    })

  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { RegComponent } from './reg/reg.component';
import { LogComponent } from './log/log.component';
import { DetailComponent } from './detail/detail.component';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'view',component:ViewComponent},
  {path:'add',component:AddComponent},
  {path:'reg',component:RegComponent},
  {path:'log',component:LogComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'edit/:id',component:AddComponent}


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

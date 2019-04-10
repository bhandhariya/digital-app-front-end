import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddmisionFormComponent } from './addmision-form/addmision-form.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addform",component:AddmisionFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

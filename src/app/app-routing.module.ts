import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AddmisionFormComponent } from './addmision-form/addmision-form.component';
import { DemoComponent } from './demo/demo.component';
import { FormComponent } from './form/form.component';
import { Personaldata1Component } from './personaldata1/personaldata1.component';
import { FamilydataComponent } from './familydata/familydata.component';
import { ChildrendataComponent } from './childrendata/childrendata.component';
import { PsychitricDataComponent } from './psychitric-data/psychitric-data.component';
import { HighRiskInformedConsentComponent } from './high-risk-informed-consent/high-risk-informed-consent.component';

const routes: Routes = [
  {path:"admin",component:AdminComponent},
  {path:"addform",component:AddmisionFormComponent},
  {path:"demo",component:DemoComponent},
  {path:"form",component:FormComponent},
  {path:'first',component:Personaldata1Component},
  {path:"family",component:FamilydataComponent},
  {path:"childern",component:ChildrendataComponent},
  {path:"psy",component:PsychitricDataComponent},
  {path:"high-risk",component:HighRiskInformedConsentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

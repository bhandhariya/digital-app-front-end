import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { FileUploadModule } from "ng2-file-upload";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule , MatInputModule } from '@angular/material';
import { AdminComponent } from './admin/admin.component';
import { AddmisionFormComponent } from './addmision-form/addmision-form.component';
import { DemoComponent } from './demo/demo.component';
import { FormComponent } from './form/form.component';
import { Personaldata1Component } from './personaldata1/personaldata1.component';
import { FamilydataComponent } from './familydata/familydata.component';
import { ChildrendataComponent } from './childrendata/childrendata.component';
import { PsychitricDataComponent } from './psychitric-data/psychitric-data.component';
import { HighRiskInformedConsentComponent } from './high-risk-informed-consent/high-risk-informed-consent.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    AddmisionFormComponent,
    DemoComponent,
    FormComponent,
    Personaldata1Component,
    FamilydataComponent,
    ChildrendataComponent,
    PsychitricDataComponent,
    HighRiskInformedConsentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    FileUploadModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

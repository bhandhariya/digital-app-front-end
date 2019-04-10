import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(@Inject(Http) public http){}

  check(){
    this.http.get("http://localhost:4200/api/users").subscribe(this.cb)
  }
  cb=(dt)=>{
   console.log(dt._body)
  }
}

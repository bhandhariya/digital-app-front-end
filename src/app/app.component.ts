import { Component, Inject, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD0odymXr_m3OPJNtHYFH2cHeftpmfZu4U",
      authDomain: "digitalapp-49c9e.firebaseapp.com",
      databaseURL: "https://digitalapp-49c9e.firebaseio.com",
      projectId: "digitalapp-49c9e",
      storageBucket: "digitalapp-49c9e.appspot.com",
      messagingSenderId: "937297135346"
    })
  }
  constructor(@Inject(Http) public http){}

  check(){
    this.http.get("http://localhost:4200/api/users").subscribe(this.cb)
  }
  cb=(dt)=>{
   console.log(dt._body)
  }
}

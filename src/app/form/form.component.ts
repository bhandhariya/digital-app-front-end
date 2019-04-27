import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";
import * as firebase from "firebase/app";
import {  AngularFireStorage } from "angularfire2/storage";
// import "firebase/auth";
// import "firebase/database";
// import "firebase/storage";
import { ngfModule, ngf } from "angular-file"
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  url="https://digitalapp001.herokuapp.com/"
  obj={
    image:""
  };
  file;
  Url;
  defaultStorage = firebase.storage().ref();
  profileUrl: Observable<string | null>;
  constructor(@Inject(Http) public http,private route:Router,private storage:AngularFireStorage) {
    // const ref = this.storage.ref('mentcom/1556282148profile');
    // var ur = ref.getDownloadURL();
    // console.log(ur)
    // ur.subscribe(rr=>{
    //   this.Url=rr;
    //   console.log(this.Url)
      

    // })
    

   }
   downloadURL: Observable<string>;
   uploadFile(event) {
    const file = event.target.files[0];
    var randomString=Math.floor(Date.now() / 1000);
    //   var picName=randomString;
    const filePath = 'mentcom'+randomString;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    // observe percentage changes
    // this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() =>{ this.downloadURL = fileRef.getDownloadURL()
        
        } )
     )
    .subscribe(e=>{
      
    })
    
  }
  // uploadpic(){
  //   var randomString=Math.floor(Date.now() / 1000);
  //   var picName=randomString;
  //   const filePath = (`mentcom/`+picName);
  //   const storageRef = firebase.storage().ref();
  //   var metadata = {
  //     contentType: 'image',
  //     cacheControl: "public, max-age=31536000",
  //   };
  //   // const ref = this.storage.ref(filePath);
  //   // const task = ref.put(this.file).then(this.cbbb);
  //   // task.then(d=>{
  //   //   var url=ref.getDownloadURL();
  //   //   url.subscribe(this.getUrl)
  //   // })
  //   const ref = this.storage.ref(filePath);
  //   var task=ref.put(this.file).then();
    
    

  // }
  // cbbb=(d=>{
  //   console.log(d)
  // })
  // getUrl=(d=>{
  //   console.log(d);
  //   this.obj.image=d;
  //   console.log(this.obj)
    
  // })

  // upload(){

  // }
  

  ngOnInit() {
    // firebase.initializeApp({
    //   apiKey: "AIzaSyD0odymXr_m3OPJNtHYFH2cHeftpmfZu4U",
    //   authDomain: "digitalapp-49c9e.firebaseapp.com",
    //   databaseURL: "https://digitalapp-49c9e.firebaseio.com",
    //   projectId: "digitalapp-49c9e",
    //   storageBucket: "digitalapp-49c9e.appspot.com",
    //   messagingSenderId: "937297135346"
    // })
  }

add(){
  
  this.downloadURL.subscribe(e=>{
    this.obj.image=e;
  })

 this.http.post('http://localhost:3000/api/pat/create',this.obj).subscribe(this.cb)
}
cb=(dt=>{
  if(dt.status == 200){
    var data=JSON.parse(dt._body);
     this.route.navigate(['first',{data:data._id}]);
  }
})

uploadProfilePhoto(cb){
  var randomString=Math.floor(Date.now() / 1000);
  var picName=randomString;

  var raja=this.defaultStorage.child("mentcom/"+picName);
  raja.put(this.file).then
  (function(snapshot){
    var data=raja.getDownloadURL();
    data.then(function(e){
      console.log(e)
      cb(null,e)
      
    })
    
  })
  
}
// cb1=(snapshot)=>{
// // var data=snapshot.getDownloadURL();
// console.log(snapshot)
// var data=snapshot.getDownloadURL();
// data.then(function(e){
//   console.log(e)
// })
// }

}



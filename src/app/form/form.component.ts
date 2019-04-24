import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from "@angular/router";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  obj={};
  constructor(@Inject(Http) public http,private route:Router) { }

  ngOnInit() {
  }

add(){
 
 this.http.post('https://digitalapp001.herokuapp.com/api/pat/create',this.obj).subscribe(this.cb)
}
cb=(dt=>{
  if(dt.status == 200){
    var data=JSON.parse(dt._body);
     this.route.navigate(['first',{data:data._id}]);
  }
})

}

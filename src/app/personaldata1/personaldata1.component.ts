import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute,Router } from "@angular/router";
import { Http } from '@angular/http';


@Component({
  selector: 'app-personaldata1',
  templateUrl: './personaldata1.component.html',
  styleUrls: ['./personaldata1.component.css']
})
export class Personaldata1Component implements OnInit {

  constructor(@Inject(Http) public http,private route:ActivatedRoute,public rout:Router) {
    this.route.params.subscribe( params => {
      this.data=params;
    } );
   }
   id;
  data;obj={
  id:""
  }
  ngOnInit() {
    this.id=(this.data.data);
    this.obj.id=(this.id)
    this.getPatientDetails(); 
  }
  getPatientDetails(){
    this.http.post('api/pat/getpatByID',this.data).subscribe(this.cb)
  }
  cb=(dt)=>{
    var d=JSON.parse(dt._body);
    console.log(d)
  }
add(){
  console.log(this.obj)
   this.http.post('api/pat/addPersonal',this.obj).subscribe(this.cb1)
}
cb1=(dt)=>{
  if(dt.status == 200){
    var data=JSON.parse(dt._body);
     this.rout.navigate(['family',{id:this.id}]);
  }
}

}

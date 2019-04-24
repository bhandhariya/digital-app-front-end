import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-psychitric-data',
  templateUrl: './psychitric-data.component.html',
  styleUrls: ['./psychitric-data.component.css']
})
export class PsychitricDataComponent implements OnInit {

  constructor(@Inject(Http) public http, private route:ActivatedRoute,public router:Router) { }
  id;patData;obj={
    id:""
  }
  time = {hour: 0, minute: 0};

  
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id=params.id;
      this.obj.id=(this.id)
    } );
    this.getPatientDetailsbyID();
  }
  getPatientDetailsbyID(){
    var obj={
      data:this.id
    }
    console.log(obj)
     this.http.post('https://digitalapp001.herokuapp.com/api/pat/getpatByID',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    this.patData=JSON.parse(dt._body)
    console.log(this.patData)
  }
  next(){
    this.router.navigate(['high-risk',{id:this.id}])
  }

}

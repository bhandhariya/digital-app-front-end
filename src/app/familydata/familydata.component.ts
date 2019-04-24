import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute ,Router } from '@angular/router';

@Component({
  selector: 'app-familydata',
  templateUrl: './familydata.component.html',
  styleUrls: ['./familydata.component.css']
})
export class FamilydataComponent implements OnInit {

  constructor(@Inject(Http) public http, private route:ActivatedRoute,public router:Router) { }
  id;marrige;
  obj={
    id:""
  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id=params.id;
      this.obj.id=(this.id)
    } );
  }
  add(){
    if(this.marrige!=0){
      console.log(this.obj)
      this.http.post('api/pat/addFamilyData',this.obj).subscribe(this.cb)
    }else{
      this.http.post('api/pat/addGuardian',this.obj).subscribe(this.cb)
    }
  }
  cb=(dt)=>{
    if(dt.status==200){
      if(this.marrige!=0){
        var data=JSON.parse(dt._body);
        console.log(data)
        this.router.navigate(['childern',{id:data._id}])
      }else{
        this.router.navigate(['form'])
      }
    }
  }

  

}

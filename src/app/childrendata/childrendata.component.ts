import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-childrendata',
  templateUrl: './childrendata.component.html',
  styleUrls: ['./childrendata.component.css']
})
export class ChildrendataComponent implements OnInit {

  constructor(@Inject(Http) public http, private route:ActivatedRoute,public router:Router) { }
  id;obj={
    id:""
  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id=params.id;
      this.obj.id=(this.id)
    } );
  }

  add(){
    
    this.router.navigate(['psy',{id:this.id}])
  }
  newChild(){
    
    this.http.post('api/pat/addchild',this.obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    if(dt.status==200){
      alert('child addedd')
    }
  }

}

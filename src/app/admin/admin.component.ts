import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  branch;AllBranch;
  constructor(@Inject(Http) public http) { }

  ngOnInit() {
    this.getAllBranch();
  }
  getAllBranch(){
    this.http.get('https://digitalapp001.herokuapp.com/api/branch/getAllBranch').subscribe(this.cb1)
  }

  cb1=(dt)=>{
    this.AllBranch=JSON.parse(dt._body)
    console.log(this.AllBranch)
  }
  addBranch(){
    var obj={
      name:this.branch
    }
    this.http.post('https://digitalapp001.herokuapp.com/api/branch/create',obj).subscribe(this.cb)
  }
  cb=(dt)=>{
    console.log(this.AllBranch)
    this.getAllBranch();
  }
  deleteBranch(x){
    var obj={
      id:x
    }
    this.http.post('api/branch/delete',obj).subscribe(this.cb2)
  }
  cb2=(dt)=>{
    alert(dt._body)
    this.getAllBranch();
  }

}

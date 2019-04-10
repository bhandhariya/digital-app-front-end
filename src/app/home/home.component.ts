import { Component, Inject,OnInit } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  AllBranch;

  constructor(@Inject(Http) public http) {
    
  }
  ngOnInit() {
 this.getAllBranch();
  }
  getAllBranch(){
    this.http.get('api/branch/getAllBranch').subscribe(this.cb1)
  }
  cb1=(dt)=>{
    this.AllBranch=JSON.parse(dt._body)
    console.log(this.AllBranch)
  }


}

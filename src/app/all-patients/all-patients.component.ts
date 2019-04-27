import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-all-patients',
  templateUrl: './all-patients.component.html',
  styleUrls: ['./all-patients.component.css']
})
export class AllPatientsComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
patient;
  ngOnInit() {
    this.getAllPatient();
  }
  getAllPatient(){
    this.http.get('http://localhost:3000/api/pat/getall').subscribe(this.cb)
  }
  cb=(dt)=>{
this.patient=JSON.parse(dt._body);
console.log(this.patient)
  }

}

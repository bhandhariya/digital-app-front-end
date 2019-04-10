import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';


@Component({
  selector: 'app-addmision-form',
  templateUrl: './addmision-form.component.html',
  styleUrls: ['./addmision-form.component.css']
})
export class AddmisionFormComponent implements OnInit {

  constructor(@Inject(Http) public http) { }
  
  ngOnInit() {
  }

}

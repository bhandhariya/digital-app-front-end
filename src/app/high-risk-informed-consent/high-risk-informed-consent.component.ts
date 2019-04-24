import { Component, OnInit, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-high-risk-informed-consent',
  templateUrl: './high-risk-informed-consent.component.html',
  styleUrls: ['./high-risk-informed-consent.component.css']
})
export class HighRiskInformedConsentComponent implements OnInit {

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

}

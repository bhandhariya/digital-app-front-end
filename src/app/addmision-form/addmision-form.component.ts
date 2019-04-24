import { Component, OnInit, Inject } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { FileUploader } from "ng2-file-upload";




  

@Component({
  selector: 'app-addmision-form',
  templateUrl: './addmision-form.component.html',
  styleUrls: ['./addmision-form.component.css']
})
export class AddmisionFormComponent implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'api/file/upload'});

  constructor(@Inject(Http) public http) {
   
   }
  
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      console.log('***** onAfterAddingFile ******')
      console.log('file ', file)
    }

    this.uploader.onCompleteItem =  (item:any, response:any, status:any, headers:any) => {
      console.log('ImageUpload:uploaded:', item, status, response);
    };

    this.uploader.onCompleteAll = () => {
      console.log('******* onCompleteAll *********')
    }

    this.uploader.onWhenAddingFileFailed = (item: any, filter: any, options: any) => {
      console.log('***** onWhenAddingFileFailed ********')
    }
  }
  marrital_status;childrens=[{}];childs;
add(){
  this.childrens.push({name:"",number:0,address:"",email:""})
}

 
 

}

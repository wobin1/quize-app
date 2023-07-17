import { Component } from '@angular/core';
import {FormControl, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData={
    "email": "",
    "name": "",
    "quiz_score": 0
  }
  
  constructor(public router: Router, private api: ServerRequestService, public store:LocalStorageService){}

  response:any;
  progress:boolean= false;

  ngOnInit(){
    
      this.checkUser()

    }

    checkUser(){
      let userId = this.store.getStoredData("nagodeTestUserId")
    if(userId!=null){
      window.location.href = '/quize';
      console.log('user already on this pc')
    }

  }

  

  submit(page:string){
    console.log("working")
    
    console.log(this.loginData)

    this.api.post('quizes/', this.loginData).subscribe(
      res=>{
        console.log(res)
        this.response = res;
        this.storeUserData(this.response.id)
        this.router.navigateByUrl('quize')
      },
      err=>{
        console.log(err)
        alert("there was a problem with your request")
        this.progress=false;
      }
    )

    this.progress=true
  }

  storeUserData(item:any){
    
    this.store.saveItem("nagodeTestUserId", item)
  }

}

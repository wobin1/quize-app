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
      // window.location.href = '/quize';
      console.log('user already on this pc')
    }

  }

  

  submit(page:string){
    console.log("working")
    
    console.log(this.loginData)

    this.api.post('quizes/register/', this.loginData).subscribe(
      res=>{
        console.log(res)
        this.response = res;
        this.storeUserData(this.response.id)
        if(this.response.user_role=='user'){
          this.router.navigateByUrl('quiz')
        }
        if(this.response.user_role=='admin'){
          this.router.navigateByUrl('admin')
        }
        
      },
      err=>{
        console.log(err)
        // console.log("This Email has already taken the Test Click ok to see your result")
        // this.router.navigateByUrl('quize')
        // this.progress=false;
      }
    )

    this.progress=true
  }

  storeUserData(item:any){
    
    this.store.saveItem("nagodeTestUserId", item)
  }

}

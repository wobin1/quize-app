import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { QuizeService } from 'src/app/shared/services/quize-service/quize.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  questions:any;
  response:any;
  status:any;

  constructor(public quizeService: QuizeService, 
            public store: LocalStorageService,
            private api: ServerRequestService,
            public router: Router
            ){}


  ngOnInit(){
    this.getUserData()
    this.questions=this.quizeService.getQuestions()

    if(this.response.user_role=='admin'){
      this.router.navigateByUrl('admin')
    }else{
      this.router.navigateByUrl('login')
    }
  }


  getUserData(){
    let userId = this.store.getStoredData("nagodeTestUserId")

    this.api.get('quizes/' + userId).subscribe(
      res=>{
        this.response = res
        console.log(this.response)
        this.status = this.response.test_status;
        console.log(this.status)
        if(this.response.user_role=='admin'){
          this.router.navigateByUrl('admin')
        }else{
          this.router.navigateByUrl('login')
        }
      },
      err=>{
        console.log(err)
        this.router.navigateByUrl('login')
      }
    )
  }

  

}

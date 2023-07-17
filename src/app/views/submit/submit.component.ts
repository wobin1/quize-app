import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent {

  response:any;
  status:any;

  constructor(public store: LocalStorageService, private api: ServerRequestService, public router: Router){}


  ngOnInit(){
    this.getUserData()
  }


  getUserData(){
    let userId = this.store.getStoredData("nagodeTestUserId")

    this.api.get('quizes/' + userId).subscribe(
      res=>{
        this.response = res
        console.log(this.response)
        this.status = this.response.test_status;
      },
      err=>{
        console.log(err)
      }
    )
  }


  finsihTest(){
    let userId = this.store.getStoredData("nagodeTestUserId")
    this.response.test_status = 'finished'
    this.api.put('quizes/' + userId + '/', this.response).subscribe(
      res=>{
        console.log(res)
        this.router.navigateByUrl('quize')
      },
      err=>{
        console.log(err)
      }
    )
  }

}

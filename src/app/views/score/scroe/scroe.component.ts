import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-scroe',
  templateUrl: './scroe.component.html',
  styleUrls: ['./scroe.component.css']
})
export class ScroeComponent {

  response:any;
  score:any;

  constructor(private api: ServerRequestService, public store: LocalStorageService,){}

  ngOnInit(){
    this.getUserData()
  }

  getUserData(){
    let userId = this.store.getStoredData("nagodeTestUserId")

    this.api.get('quizes/').subscribe(
      res=>{
        this.response = res
        
        console.log(this.response)
        this.score = this.response.quiz_score;
        console.log(this.score)
      },
      err=>{
        console.log(err)
      }
    )
  }

}

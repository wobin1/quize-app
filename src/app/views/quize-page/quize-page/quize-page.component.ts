import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/shared/services/local-storage-service/local-storage.service';
import { QuizeService } from 'src/app/shared/services/quize-service/quize.service';
import { ServerRequestService } from 'src/app/shared/services/server-request-service/server-request.service';

@Component({
  selector: 'app-quize-page',
  templateUrl: './quize-page.component.html',
  styleUrls: ['./quize-page.component.css']
})
export class QuizePageComponent {
  admin:boolean = false;
  response:any;
  status:any;
  lastQuestion:boolean = false;
  start:boolean=false;
  min:any;
  sec:any;
  questionLength:any;
  time:any = 25;



  constructor(private api: ServerRequestService, 
            public store: LocalStorageService, 
            public router: Router,
            public questions: QuizeService){}

  ngOnInit(){
    this.getUserData()
    this.status
    
    
  }

  getUserData(){
    let userId = this.store.getStoredData("nagodeTestUserId")

    this.api.get('quizes/' + userId).subscribe(
      res=>{
        this.response = res
        console.log(this.response)
        this.status = this.response.test_status;
        console.log(this.status)
      },
      err=>{
        console.log(err)
      }
    )
  }


  countdown(minutes:any) {

    this.start=true;

    let seconds = minutes * 60;
  
    const countdownInterval = setInterval(() => {
      this.min = Math.floor(seconds / 60);
      this.sec = seconds % 60;
  
      // console.log(`${minutesRemaining} minutes ${secondsRemaining} seconds remaining.`);
  
      if (seconds <= 0) {
        console.log("Time's up!");
        clearInterval(countdownInterval);
        // Perform the submit action here
        this.finsihTest();
      }
  
      seconds--;
    }, 1000);
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

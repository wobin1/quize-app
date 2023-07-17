import { Component } from '@angular/core';
import { QuizeService } from 'src/app/shared/services/quize-service/quize.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  questions:any;

  constructor(public quizeService: QuizeService,){}


  ngOnInit(){
    this.questions=this.quizeService.getQuestions()
  }

  

}

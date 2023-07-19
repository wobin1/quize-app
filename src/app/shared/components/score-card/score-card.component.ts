import { Component, Input } from '@angular/core';
import { QuizeService } from '../../services/quize-service/quize.service';

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent {
  @Input() name!:string;
  @Input() email!:string;
  @Input() score!:any;

  questionLength:any;
  final_score:any;
  
  constructor(public questions: QuizeService){}

  ngOnInit(){
    this.questionLength = this.questions.getQuestions().length;
    this.final_score = this.score/this.questionLength * 100;
    this.final_score = Math.round(this.final_score);
    this.score = this.final_score;
  }
}

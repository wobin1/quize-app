import { Component, Input, Output, EventEmitter } from '@angular/core';
import { QuizeService } from '../../services/quize-service/quize.service';
import { LocalStorageService } from '../../services/local-storage-service/local-storage.service';
import { ServerRequestService } from '../../services/server-request-service/server-request.service';
import { RoutingService } from '../../services/routing-service/routing.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-card',
  templateUrl: './question-card.component.html',
  styleUrls: ['./question-card.component.css']
})
export class QuestionCardComponent {
  @Input() question!:string;
  @Input() optionA!:string;
  @Input() optionB!:string;
  @Input() optionC!:string;
  @Input() optionD!:string;
  @Input() question_number!:string;
  @Input() is_admin!:string;
  @Input() answer!:string;

  @Output() btnClick = new EventEmitter;

  selected!:string;
  selectedAns!:any;

  onClick(ans:string){
    this.btnClick.emit()
    this.selected=ans;
    this.answer=ans;
    this.selectedAns=ans
  }

  admin:boolean = false;
  response:any;

  quizQuestions!: any[];
  currentQuestionIndex!: number;
  score!: number;
  questions: any[]= [
              {
                "question": "What is the capital of Australia?",
                "options": ["Sydney", "Melbourne", "Canberra", "Perth"],
                "correctAnswer": "Canberra"
              },
              {
                "question": "Which planet is known as the Red Planet?",
                "options": ["Mars", "Venus", "Jupiter", "Saturn"],
                "correctAnswer": "Mars"
              },
              {
                "question": "Who painted the Mona Lisa?",
                "options": ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
                "correctAnswer": "Leonardo da Vinci"
              },
              {
                "question": "What is the largest ocean on Earth?",
                "options": ["Atlantic Ocean", "Arctic Ocean", "Indian Ocean", "Pacific Ocean"],
                "correctAnswer": "Pacific Ocean"
              },
              {
                "question": "Which country is home to the tallest mountain, Mount Everest?",
                "options": ["China", "Nepal", "India", "Bhutan"],
                "correctAnswer": "Nepal"
              },
              {
                "question": "Who wrote the play 'Romeo and Juliet'?",
                "options": ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
                "correctAnswer": "William Shakespeare"
              },
              {
                "question": "What is the chemical symbol for gold?",
                "options": ["Au", "Ag", "Fe", "Cu"],
                "correctAnswer": "Au"
              },
              {
                "question": "Which country won the FIFA World Cup 2018?",
                "options": ["France", "Germany", "Brazil", "Argentina"],
                "correctAnswer": "France"
              },
              {
                "question": "What is the largest organ in the human body?",
                "options": ["Heart", "Brain", "Liver", "Skin"],
                "correctAnswer": "Skin"
              },
              {
                "question": "Who is the author of the Harry Potter book series?",
                "options": ["J.R.R. Tolkien", "J.K. Rowling", "C.S. Lewis", "Stephenie Meyer"],
                "correctAnswer": "J.K. Rowling"
              }
            ]

  constructor(private quizService: QuizeService, public store: LocalStorageService, private api: ServerRequestService, public router: Router){}

  ngOnInit(){
    this.getUserData()
    this.quizQuestions = this.questions;
    this.currentQuestionIndex = 0;
    this.currentQuestion()
  }

  currentQuestion(){
    this.currentQuestionIndex = this.currentQuestionIndex
    this.question = this.quizQuestions[this.currentQuestionIndex].question;
    this.optionA = this.quizQuestions[this.currentQuestionIndex].options[0]
    this.optionB = this.quizQuestions[this.currentQuestionIndex].options[1]
    this.optionC = this.quizQuestions[this.currentQuestionIndex].options[2]
    this.optionD = this.quizQuestions[this.currentQuestionIndex].options[3]
  }

  answerSelected() {

    const currentQuestion = this.quizQuestions[this.currentQuestionIndex];

    if (this.answer == currentQuestion.correctAnswer) {
      this.score = this.score + 1;
      this.updateScore(this.score)
      console.log("score updated")
    }

    console.log('current question index')
    this.currentQuestionIndex++;
    console.log(this.currentQuestionIndex)

    this.currentQuestion()

    console.log("question length")
    console.log(this.quizQuestions.length)

    if (this.currentQuestionIndex == this.quizQuestions.length - 1) {
      this.router.navigateByUrl('submit')
    }
  }

  getUserData(){
    let userId = this.store.getStoredData("nagodeTestUserId")

    this.api.get('quizes/' + userId).subscribe(
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

  updateScore(score:any){
    let userId = this.store.getStoredData("nagodeTestUserId")
    this.response.quiz_score = this.score
    this.api.put('quizes/' + userId + '/', this.response).subscribe(
      res=>{
        console.log(res)
      },
      err=>{
        console.log(err)
      }
    )
  }

  
  
}

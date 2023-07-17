import { Component } from '@angular/core';
import { QuizeService } from 'src/app/shared/services/quize-service/quize.service';

@Component({
  selector: 'app-quize-page',
  templateUrl: './quize-page.component.html',
  styleUrls: ['./quize-page.component.css']
})
export class QuizePageComponent {
  admin:boolean = false;
  // reachedLastQuestion!:boolean;
  // userHasTaken!:boolean;

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

  constructor(private quizService: QuizeService){}

  ngOnInit(){

  }

  
}

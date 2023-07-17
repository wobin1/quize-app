import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component';
import { QuizeHeaderComponent } from './components/quize-header/quize-header.component';
import { AdminComponent } from './layout/admin/admin.component';
import { QuizeComponent } from './layout/quize/quize.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuestionCardComponent } from './components/question-card/question-card.component';
import { ScoreCardComponent } from './components/score-card/score-card.component';



@NgModule({
  declarations: [
    AdminHeaderComponent,
    QuizeHeaderComponent,
    AdminComponent,
    QuizeComponent,
    QuestionCardComponent,
    ScoreCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    AdminHeaderComponent,
    QuizeHeaderComponent,
    AdminComponent,
    QuizeComponent,
    QuestionCardComponent,
    ScoreCardComponent
  ]
})
export class SharedModule { }

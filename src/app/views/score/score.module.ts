import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreRoutingModule } from './score-routing.module';
import { ScroeComponent } from './scroe/scroe.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ScroeComponent
  ],
  imports: [
    CommonModule,
    ScoreRoutingModule,
    SharedModule
  ]
})
export class ScoreModule { }

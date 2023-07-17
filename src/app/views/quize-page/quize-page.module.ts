import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuizePageRoutingModule } from './quize-page-routing.module';
import { QuizePageComponent } from './quize-page/quize-page.component';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    QuizePageComponent
  ],
  imports: [
    CommonModule,
    QuizePageRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule
  ]
})
export class QuizePageModule { }

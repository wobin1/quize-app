import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSidenavModule} from '@angular/material/sidenav';


const Material = [
  MatSlideToggleModule,
  MatCardModule,
  MatButtonModule,
  MatDividerModule,
  MatProgressBarModule,
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatIconModule,
  MatRadioModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, Material
  ],
  exports: [Material]
})
export class MaterialModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AuthRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }

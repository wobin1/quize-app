import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeComponent } from './quize/quize.component';

const routes: Routes = [
  {path:'test', component:QuizeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizeRoutingModule { }

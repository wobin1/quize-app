import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScroeComponent } from './scroe/scroe.component';

const routes: Routes = [
  {path:'score', component: ScroeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }

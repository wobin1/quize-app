import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeComponent } from 'src/app/shared/layout/quize/quize.component';
import { QuizePageComponent } from './quize-page/quize-page.component';

const routes: Routes = [
{path:'quiz', component: QuizePageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuizePageRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,  Routes } from '@angular/router';
import { LoginComponent } from './views/auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { QuizeComponent } from './shared/layout/quize/quize.component';
import { QuizePageComponent } from './views/quize-page/quize-page/quize-page.component';
import { AdminComponent } from './shared/layout/admin/admin.component';


const routes:Routes = [
    {path:'', loadChildren: () => import('./views/quize-page/quize-page.module').then(m => m.QuizePageModule)},
    {path:'', component: AdminComponent, children: [
      {path:'', loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)},
      {path:'', loadChildren: () => import('./views/score/score.module').then(m => m.ScoreModule)},
    ]},
    {path:'', loadChildren: () => import('./views/auth/auth.module').then(m => m.AuthModule)},

]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

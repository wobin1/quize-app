import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(public router: Router) { }


  route(page:string){
    if(page=="quize"){
      this.router.navigateByUrl('quize')
    }
    if(page=="admin"){
      this.router.navigateByUrl('admin')
    }
    if(page=="score"){
      this.router.navigateByUrl('score')
    }
    if(page=="login"){
      this.router.navigateByUrl('login')
    }
  }
}

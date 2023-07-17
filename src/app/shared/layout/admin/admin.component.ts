import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  sidenav_toggle:boolean=true;

  constructor(public router: Router){}

  toggle(){
    console.log("toggle working")
    this.sidenav_toggle=!this.sidenav_toggle;
  }

  route(page:string){
    if(page=='admin'){
      this.router.navigateByUrl('admin')
    }
    if(page=='score'){
      this.router.navigateByUrl('score')
    }
  }

}

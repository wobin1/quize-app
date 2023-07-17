import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent {
    @Output() btnClick= new EventEmitter
    show_toggle:boolean=true;


    onClick(){
      console.log("second toggle working")
      this.btnClick.emit()
      this.show_toggle=false;
    }
}

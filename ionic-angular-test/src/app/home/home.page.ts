import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor() {}

    text:string = ""

    ngOnInit(){
  
    }
  
    showMessage(){
      this.text = "Great, you have done something new."
    }

}

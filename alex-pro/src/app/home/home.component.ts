import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'AlexPro';
  h1Style: boolean = false;
  users: Object;

  constructor() {}

  ngOnInit() {}

  firstClick() {
    // this.data.firstClick();
    this.h1Style = true;
    console.log('clicked');
  }
}

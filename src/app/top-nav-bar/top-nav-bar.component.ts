import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-nav-bar',
  templateUrl: './top-nav-bar.component.html',
  styleUrls: ['./top-nav-bar.component.scss']
})
export class TopNavBarComponent implements OnInit {
  title = 'Angular.js Demo';

  constructor() { }

  ngOnInit() {
    console.log('TopNavBarComponent initializing...');
  }

}

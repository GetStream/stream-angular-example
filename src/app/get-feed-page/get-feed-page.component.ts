import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-feed-page',
  templateUrl: './get-feed-page.component.html',
  styleUrls: ['./get-feed-page.component.scss']
})
export class GetFeedPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('GetFeedPageComponent initializing...');
  }

}

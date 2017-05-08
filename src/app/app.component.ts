import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Stream NG2 Demo';

  ngOnInit() {
    console.log('AppComponent initializing...');
    $(document).foundation();
  }

}

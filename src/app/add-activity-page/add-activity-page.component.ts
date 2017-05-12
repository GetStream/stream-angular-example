import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-activity-page',
  templateUrl: './add-activity-page.component.html',
  styleUrls: ['./add-activity-page.component.scss']
})
export class AddActivityPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('AddActivityPageComponent initializing...');
  }

}

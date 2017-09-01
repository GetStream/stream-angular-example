import { Component, OnInit } from '@angular/core';
import { StreamClientService } from '../stream-client.service';

import { StreamActivity } from '../stream-activity';

@Component({
  providers: [
    StreamClientService
  ],
  selector: 'app-stream-add-activity',
  templateUrl: './stream-add-activity.component.html',
  styleUrls: ['./stream-add-activity.component.scss']
})
export class StreamAddActivityComponent implements OnInit {
  newActivity: StreamActivity;

  constructor(private streamClient: StreamClientService) {
    this.newActivity = new StreamActivity();
    this.newActivity.actor = 'user_simon_5678';
    this.newActivity.object = 'blah blah blah';
    this.newActivity.verb = 'message';
  }

  addActivity() {
    console.log('[method] addActivity called', this.streamClient);

    this.streamClient.addActivity(this.newActivity).then(activity_id => {
      console.log('Service promise resolved: ', activity_id);
    });
  }

  ngOnInit() {
    console.log('StreamAddActivityComponent initializing...');
  }

}

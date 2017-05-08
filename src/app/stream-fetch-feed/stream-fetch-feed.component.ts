import { Component, OnInit } from '@angular/core';
import { StreamClientService } from '../stream-client.service';

import { StreamActivity } from '../stream-activity';

@Component({
  providers: [
    StreamClientService
  ],
  selector: 'app-stream-fetch-feed',
  templateUrl: './stream-fetch-feed.component.html',
  styleUrls: ['./stream-fetch-feed.component.scss']

})
export class StreamFetchFeedComponent implements OnInit {
  activities: StreamActivity[] = [];

  constructor(private streamClient: StreamClientService) {
  }

  getFeed(): void {
      console.log('[method] getFeed called', this.streamClient);

      this.streamClient.getFeed().then(activities => {
        console.log("Service promise resolved: ", activities);
        this.activities = activities;
      });
  }

  ngOnInit(): void {
    console.log('[Component] stream-fetch-feed running');
  }

}

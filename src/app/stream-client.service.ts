import { Injectable } from '@angular/core';
import stream from 'getstream';

import { StreamActivity } from './stream-activity';

const APP_TOKEN = '';
const APP_ID = '';
const FEED_GROUP = '';
const FEED_ID = '';
const FEED_TOKEN = '';

@Injectable()
export class StreamClientService {
  client;

  constructor() {
    // Instantiate a new client (client side)
    this.client = stream.connect(APP_TOKEN, null, APP_ID);
  }

  getFeed(): Promise<StreamActivity[]> {
    // Instantiate the feed via factory method
    let feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);

    // Fetch the feed and pick the results property off the response object
    let getFeedPromise = feed.get()
      .then(response => response.results);

    // return the promise resolution
    return Promise.resolve(getFeedPromise);
  }

  addActivity(activity:StreamActivity): Promise<string> {
    // Instantiate the feed via factory method
    let feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);

    let addActivityPromise = feed.addActivity(activity)
      .then(response => response.id);

    // return the promise resolution
    return Promise.resolve(addActivityPromise);
  }
}

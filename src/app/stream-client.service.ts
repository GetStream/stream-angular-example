import { Injectable } from '@angular/core';
// import stream = require('getstream');
import * as stream from 'getstream';

import { StreamActivity } from './stream-activity';
const APP_TOKEN = 'ejafvxbtfbz6';
const APP_ID = '24870';
const FEED_GROUP = 'conversation';
const FEED_ID = 'conversation_9876';
const FEED_TOKEN = 'qkrJTwSrK9-a1ZSmiGVJniWeTtY';
const TOPIC_FEED_GROUP = 'topic_timeline';
const TOPIC_FEED_ID = 'topic_123';
const TOPIC_FEED_TOKEN = 'SSg7p93Fjpw_aqJe3l-oR8TC0oI';

@Injectable()
export class StreamClientService {
  client: stream.Client;

  constructor() {
    // Instantiate a new client (client side)
    this.client = stream.connect(APP_TOKEN, null, APP_ID);
  }

  getFeed(): Promise<StreamActivity[]> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);

    // Fetch the feed and pick the results property off the response object
    return feed.get().then(response => response['results'])
  }

  addActivity(activity: StreamActivity): Promise<string> {
    // Instantiate the feed via factory method
    const feed = this.client.feed(FEED_GROUP, FEED_ID, FEED_TOKEN);
    const addActivityPromise = feed.addActivity(activity)
      .then(response => response['id']);

    // return the promise resolution
    return Promise.resolve(addActivityPromise);
  }
}

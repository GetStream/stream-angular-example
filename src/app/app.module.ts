import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StreamFetchFeedComponent } from './stream-fetch-feed/stream-fetch-feed.component';
import { StreamAddActivityComponent } from './stream-add-activity/stream-add-activity.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamFetchFeedComponent,
    StreamAddActivityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

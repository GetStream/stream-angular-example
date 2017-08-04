import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StreamFetchFeedComponent } from './stream-fetch-feed/stream-fetch-feed.component';
import { StreamAddActivityComponent } from './stream-add-activity/stream-add-activity.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddActivityPageComponent } from './add-activity-page/add-activity-page.component';
import { GetFeedPageComponent } from './get-feed-page/get-feed-page.component';
import { TopNavBarComponent } from './top-nav-bar/top-nav-bar.component';
import { JwtGeneratorPageComponent } from './jwt-generator-page/jwt-generator-page.component';

@NgModule({
  declarations: [
    AppComponent,
    StreamFetchFeedComponent,
    StreamAddActivityComponent,
    HomePageComponent,
    AddActivityPageComponent,
    GetFeedPageComponent,
    TopNavBarComponent,
    JwtGeneratorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

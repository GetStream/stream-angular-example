import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { AddActivityPageComponent } from './add-activity-page/add-activity-page.component';
import { GetFeedPageComponent } from './get-feed-page/get-feed-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'add-activity',
    component: AddActivityPageComponent
  },
  {
    path: 'get-feed',
    component: GetFeedPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

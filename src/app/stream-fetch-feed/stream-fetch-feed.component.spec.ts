import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamFetchFeedComponent } from './stream-fetch-feed.component';

describe('StreamFetchFeedComponent', () => {
  let component: StreamFetchFeedComponent;
  let fixture: ComponentFixture<StreamFetchFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StreamFetchFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamFetchFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

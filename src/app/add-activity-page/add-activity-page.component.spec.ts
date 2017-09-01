import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { AddActivityPageComponent } from './add-activity-page.component';
import { StreamAddActivityComponent } from '../stream-add-activity/stream-add-activity.component';

describe('AddActivityPageComponent', () => {
  let component: AddActivityPageComponent;
  let fixture: ComponentFixture<AddActivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityPageComponent, StreamAddActivityComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddActivityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

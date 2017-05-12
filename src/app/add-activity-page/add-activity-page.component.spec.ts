import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddActivityPageComponent } from './add-activity-page.component';

describe('AddActivityPageComponent', () => {
  let component: AddActivityPageComponent;
  let fixture: ComponentFixture<AddActivityPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddActivityPageComponent ]
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

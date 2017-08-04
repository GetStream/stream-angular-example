import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JwtGeneratorPageComponent } from './jwt-generator-page.component';

describe('JwtGeneratorPageComponent', () => {
  let component: JwtGeneratorPageComponent;
  let fixture: ComponentFixture<JwtGeneratorPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JwtGeneratorPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JwtGeneratorPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

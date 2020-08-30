import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBirdComponent } from './one-bird.component';

describe('OneBirdComponent', () => {
  let component: OneBirdComponent;
  let fixture: ComponentFixture<OneBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

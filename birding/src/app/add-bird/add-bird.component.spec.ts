import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBirdComponent } from './add-bird.component';

describe('AddBirdComponent', () => {
  let component: AddBirdComponent;
  let fixture: ComponentFixture<AddBirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

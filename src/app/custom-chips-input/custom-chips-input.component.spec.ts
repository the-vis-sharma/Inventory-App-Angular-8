import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomChipsInputComponent } from './custom-chips-input.component';

describe('CustomChipsInputComponent', () => {
  let component: CustomChipsInputComponent;
  let fixture: ComponentFixture<CustomChipsInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomChipsInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomChipsInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

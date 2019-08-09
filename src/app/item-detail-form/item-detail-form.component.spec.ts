import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailFormComponent } from './item-detail-form.component';

describe('ItemDetailFormComponent', () => {
  let component: ItemDetailFormComponent;
  let fixture: ComponentFixture<ItemDetailFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemDetailFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemDetailFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

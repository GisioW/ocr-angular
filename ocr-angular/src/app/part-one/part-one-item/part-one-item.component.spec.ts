import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOneItemComponent } from './part-one-item.component';

describe('PartOneItemComponent', () => {
  let component: PartOneItemComponent;
  let fixture: ComponentFixture<PartOneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOneItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

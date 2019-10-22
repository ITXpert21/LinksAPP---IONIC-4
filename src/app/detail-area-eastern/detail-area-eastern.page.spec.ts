import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAreaEasternPage } from './detail-area-eastern.page';

describe('DetailAreaEasternPage', () => {
  let component: DetailAreaEasternPage;
  let fixture: ComponentFixture<DetailAreaEasternPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAreaEasternPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAreaEasternPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

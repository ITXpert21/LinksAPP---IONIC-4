import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAreaPage } from './detail-area.page';

describe('DetailAreaPage', () => {
  let component: DetailAreaPage;
  let fixture: ComponentFixture<DetailAreaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailAreaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAreaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

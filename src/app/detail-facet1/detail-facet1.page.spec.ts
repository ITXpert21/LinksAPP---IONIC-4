import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacet1Page } from './detail-facet1.page';

describe('DetailFacet1Page', () => {
  let component: DetailFacet1Page;
  let fixture: ComponentFixture<DetailFacet1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacet1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacet1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

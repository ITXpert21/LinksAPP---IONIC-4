import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacet2Page } from './detail-facet2.page';

describe('DetailFacet2Page', () => {
  let component: DetailFacet2Page;
  let fixture: ComponentFixture<DetailFacet2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacet2Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacet2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

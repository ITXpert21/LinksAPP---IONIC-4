import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacet4Page } from './detail-facet4.page';

describe('DetailFacet4Page', () => {
  let component: DetailFacet4Page;
  let fixture: ComponentFixture<DetailFacet4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacet4Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacet4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

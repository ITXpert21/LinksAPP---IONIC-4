import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacet3Page } from './detail-facet3.page';

describe('DetailFacet3Page', () => {
  let component: DetailFacet3Page;
  let fixture: ComponentFixture<DetailFacet3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacet3Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacet3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacetPage } from './detail-facet.page';

describe('DetailFacetPage', () => {
  let component: DetailFacetPage;
  let fixture: ComponentFixture<DetailFacetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFacetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFacetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

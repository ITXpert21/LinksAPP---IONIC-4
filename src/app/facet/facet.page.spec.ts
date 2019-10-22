import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacetPage } from './facet.page';

describe('FacetPage', () => {
  let component: FacetPage;
  let fixture: ComponentFixture<FacetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

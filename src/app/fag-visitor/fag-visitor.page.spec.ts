import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FagVisitorPage } from './fag-visitor.page';

describe('FagVisitorPage', () => {
  let component: FagVisitorPage;
  let fixture: ComponentFixture<FagVisitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FagVisitorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FagVisitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

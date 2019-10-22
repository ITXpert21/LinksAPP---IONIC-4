import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoundersPage } from './founders.page';

describe('FoundersPage', () => {
  let component: FoundersPage;
  let fixture: ComponentFixture<FoundersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoundersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoundersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

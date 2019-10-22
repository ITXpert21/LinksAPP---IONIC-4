import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FagMemberPage } from './fag-member.page';

describe('FagMemberPage', () => {
  let component: FagMemberPage;
  let fixture: ComponentFixture<FagMemberPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FagMemberPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FagMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

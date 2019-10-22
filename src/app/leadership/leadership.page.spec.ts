import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipPage } from './leadership.page';

describe('LeadershipPage', () => {
  let component: LeadershipPage;
  let fixture: ComponentFixture<LeadershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStagesPage } from './adm-stages.page';

describe('AdmStagesPage', () => {
  let component: AdmStagesPage;
  let fixture: ComponentFixture<AdmStagesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmStagesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStagesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrosakdetailPage } from './trosakdetail.page';

describe('TrosakdetailPage', () => {
  let component: TrosakdetailPage;
  let fixture: ComponentFixture<TrosakdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrosakdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrosakdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

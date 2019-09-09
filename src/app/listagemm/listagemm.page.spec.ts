import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemmPage } from './listagemm.page';

describe('ListagemmPage', () => {
  let component: ListagemmPage;
  let fixture: ComponentFixture<ListagemmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemmPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

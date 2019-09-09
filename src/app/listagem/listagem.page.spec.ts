import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemPage } from './listagem.page';

describe('ListagemPage', () => {
  let component: ListagemPage;
  let fixture: ComponentFixture<ListagemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListagemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

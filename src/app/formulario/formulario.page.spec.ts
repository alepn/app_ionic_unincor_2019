import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPage } from './formulario.page';

describe('FormularioPage', () => {
  let component: FormularioPage;
  let fixture: ComponentFixture<FormularioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

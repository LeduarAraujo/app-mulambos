import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroOperadorComponent } from './cadastro-operador.component';

describe('CadastroOperadorComponent', () => {
  let component: CadastroOperadorComponent;
  let fixture: ComponentFixture<CadastroOperadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroOperadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroOperadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

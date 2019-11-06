import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControleJogosComponent } from './controle-jogos.component';

describe('ControleJogosComponent', () => {
  let component: ControleJogosComponent;
  let fixture: ComponentFixture<ControleJogosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControleJogosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControleJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

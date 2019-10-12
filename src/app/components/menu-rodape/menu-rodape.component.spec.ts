import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRodapeComponent } from './menu-rodape.component';

describe('MenuRodapeComponent', () => {
  let component: MenuRodapeComponent;
  let fixture: ComponentFixture<MenuRodapeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRodapeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRodapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

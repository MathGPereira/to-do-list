import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirAtividadeComponent } from './excluir-atividade.component';

describe('ExcluirAtividadeComponent', () => {
  let component: ExcluirAtividadeComponent;
  let fixture: ComponentFixture<ExcluirAtividadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcluirAtividadeComponent]
    });
    fixture = TestBed.createComponent(ExcluirAtividadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Formazione } from './formazione';

describe('Formazione', () => {
  let component: Formazione;
  let fixture: ComponentFixture<Formazione>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Formazione]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Formazione);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inediti } from './inediti';

describe('Inediti', () => {
  let component: Inediti;
  let fixture: ComponentFixture<Inediti>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inediti]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Inediti);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpTV } from './exp-tv';

describe('ExpTV', () => {
  let component: ExpTV;
  let fixture: ComponentFixture<ExpTV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpTV]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpTV);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

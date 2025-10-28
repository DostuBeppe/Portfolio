import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusTea } from './mus-tea';

describe('MusTea', () => {
  let component: MusTea;
  let fixture: ComponentFixture<MusTea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusTea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusTea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

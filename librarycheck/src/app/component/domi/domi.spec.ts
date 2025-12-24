import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Domi } from './domi';

describe('Domi', () => {
  let component: Domi;
  let fixture: ComponentFixture<Domi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Domi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Domi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

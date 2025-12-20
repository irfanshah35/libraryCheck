import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryCheck } from './library-check';

describe('LibraryCheck', () => {
  let component: LibraryCheck;
  let fixture: ComponentFixture<LibraryCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

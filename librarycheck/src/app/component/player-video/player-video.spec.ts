import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVideo } from './player-video';

describe('PlayerVideo', () => {
  let component: PlayerVideo;
  let fixture: ComponentFixture<PlayerVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerVideo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

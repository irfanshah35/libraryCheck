import {
  Component,
  ViewChild,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayerVideo } from './component/player-video/player-video';
import { GetBannerById } from 'universe-code/uiux';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  imports: [CommonModule],
})
export class AppComponent implements   AfterViewInit {
  @ViewChild(PlayerVideo) playerVideo!: PlayerVideo;
constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  sportId = '4';

  matchOddsData = [
    {
      oddsData: { status: 'OPEN' },
      eventTime: new Date().getTime() + 600000,
    },
  ];

  bannerMap: Record<string, string> = {
    '2': '/TennisBanner.jpg',
    '3': '/FootBallBanner.jpg',
    '4': '/CricketBanner.jpg',
  };
  get bannerImage(): string {
    return this.bannerMap[this.sportId] || '';
  }

   
  

  ngAfterViewInit(): void {
    GetBannerById({
     rootId: 'banner-root',
      status: this.matchOddsData[0]?.oddsData?.status,
      centerText: 'Bet Started',
      gameTime: new Date(
        this.matchOddsData[0]?.eventTime
      ).toLocaleString(),
      backgroundImage: this.bannerImage,
  });
  }

  liveStreaming() {
    console.log('Live Streaming click');
    this.playerVideo?.getStreaming();
  }
}

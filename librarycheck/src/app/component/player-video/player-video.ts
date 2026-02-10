import {
  Component,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
  OnChanges,
  AfterViewInit,
  EventEmitter,
  Output
} from '@angular/core';

import { NetworkService } from '../../service/network-service';
import { ToastrService } from 'ngx-toastr';

declare var T20RTCPlayer: any;

@Component({
  selector: 'app-player-video',
  templateUrl: './player-video.html',
  styleUrls: ['./player-video.css'],
  standalone: true,
})
export class PlayerVideo implements OnChanges, AfterViewInit {
  @Input() eventId: any;
  @Output() dataEmitter = new EventEmitter<boolean>();

  @ViewChild('videoContainer')
  videoContainer!: ElementRef<HTMLDivElement>;

  streamingName: any;
  streamingURl: any;
  streamData: any;

  showStream = false;
  webrtcPlayer: any;
  viewReady = false;

  constructor(
    private networkService: NetworkService,
    private toaster: ToastrService
  ) { }

  ngAfterViewInit() {
    this.viewReady = true;
    if (this.eventId) {
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['eventId'] && this.eventId && this.viewReady) {
    }
  }

  // async getStreaming() {
  //   if (!this.eventId) return;

  //   setTimeout(async () => {
  //     try {
  //       const res: any = await this.networkService.getStreamData({
  //         eventId: this.eventId
  //       });

  //       this.streamData = res?.data || res;
  //       this.streamingName = this.streamData?.streamingName;
  //       this.streamingURl = this.streamData?.url;

  //       if (!this.streamData || !this.streamingName) {
  //         this.toaster.error(
  //           'We apologize, but streaming is not currently available.',
  //           '',
  //           { positionClass: 'toast-top-center' }
  //         );
  //         this.showStream = false;
  //         this.dataEmitter.emit(false);
  //         return;
  //       }

  //       this.showStream = true;
  //       this.dataEmitter.emit(true);

  //       // 🔥 Clear previous player
  //       if (this.webrtcPlayer) {
  //         this.webrtcPlayer = null;
  //       }

  //       // 🔥 Inject video tag
  //       this.videoContainer.nativeElement.innerHTML = `
  //       <video
  //         id="remoteVideo"
  //         autoplay
  //         playsinline
  //         muted
  //         style="width:100%;height:auto;">
  //       </video>
  //     `;

  //       // 🔥 Start WebRTC Player (same as old project)
  //       setTimeout(() => {
  //         this.webrtcPlayer = new T20RTCPlayer(
  //           'remoteVideo',
  //           this.streamingName,
  //           '',
  //           this.streamingURl,
  //           '',
  //           true,
  //           true,
  //           'tcp'
  //         );
  //         this.webrtcPlayer.Play();
  //       }, 100);

  //     } catch (err) {
  //       console.error('Streaming error:', err);
  //       this.showStream = false;
  //       this.dataEmitter.emit(false);
  //     }
  //   }, 1);
  // }

   async getStreaming() {
  if (!this.eventId) return;

  // 🔥 ALWAYS inject video element FIRST
  this.videoContainer.nativeElement.innerHTML = `
    <video
      id="remoteVideo"
      autoplay
      playsinline
      muted
      style="width:30%;height:auto;background:black;margin-top:10px;">
    </video>
  `;

  try {
    const res: any = await this.networkService.getStreamData({
      eventId: this.eventId
    });

    this.streamData = res?.data || res;
    this.streamingName = this.streamData?.streamingName;
    this.streamingURl = this.streamData?.url;

    // ❌ Stream NOT available → iframe stays, no play
    if (!this.streamData || !this.streamingName) {
      this.showStream = false;
      this.dataEmitter.emit(false);

      this.toaster.error(
        'We apologize, but streaming is not currently available.',
        '',
        { positionClass: 'toast-top-center' }
      );
      return;
    }

    // ✅ Stream available → play
    this.showStream = true;
    this.dataEmitter.emit(true);

    // 🔥 Clear old player
    if (this.webrtcPlayer) {
      this.webrtcPlayer = null;
    }

    setTimeout(() => {
      this.webrtcPlayer = new T20RTCPlayer(
        'remoteVideo',
        this.streamingName,
        '',
        this.streamingURl,
        '',
        true,
        true,
        'tcp'
      );
      this.webrtcPlayer.Play();
    }, 100);

  } catch (err) {
    console.error('Streaming error:', err);
    this.showStream = false;
    this.dataEmitter.emit(false);
  }
}
}

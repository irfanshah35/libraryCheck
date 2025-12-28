import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterOutlet } from "@angular/router";
import { toaster } from "universe-code/uiux";
import { socket } from 'universe-code/socket';
import { AppIdbService } from './service/indexdb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class AppComponent implements OnInit, OnDestroy {

  userBalance: number = 0;
  userExposure: number = 0;

  constructor(private router: Router, private http: HttpClient, private readonly idb: AppIdbService) {
    toaster.configure({
      position: "top-left",
      maxToasts: 7,
      duration: 4000,
    });
  }

  success() {
    toaster.success({
      title: "Success",
      description: "Success toast."
    })
  };
  error() {
    toaster.error({
      title: "error",
      description: "Error toast."
    })
  };
  info() {
    toaster.info({
      title: "Info",
      description: "Information message."
    })
  };
  warning() {

    toaster.warning({
      title: "Warning",
      description: "Warning message."
    })
  }
  goExchange() {
    this.router.navigate(['/exchange']);
  }

  goDomi() {
    this.router.navigate(['/domi']);
  }
  title = 'Angular Socket Demo';
  
  // Socket states
  socketConnected = false;
  socketId: string | null = null;
  receivedMessages: any[] = [];
  
  // Cleanup functions
  private offMessage?: () => void;
  private offOdds?: () => void;
  private statusInterval?: any;

  ngOnInit(): void {
    // 1️⃣ Configure Socket
    socket.configure({
      url: 'https://t20exch.com',
      path: '/market-based-sports',
      transports: ['websocket'],
    });

    console.log('🔧 Socket configuration complete');

    // 2️⃣ Connect Socket
    socket.connect();

    // 3️⃣ Listen to custom events
    this.offMessage = socket.onEvent('message', (data: any) => {
      console.log('📩 Message received:', data);
      this.receivedMessages.push(data);
    });

    this.offOdds = socket.onEvent('odds', (data: any) => {
      console.log('📊 Odds received:', data);
    });

    // 4️⃣ Check connection status
    this.statusInterval = setInterval(() => {
      this.socketConnected = socket.isConnected();
      this.socketId = socket.getSocketId();
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('🧹 Cleaning up socket...');
    
    // Clear interval
    if (this.statusInterval) {
      clearInterval(this.statusInterval);
    }

    // Remove event listeners
    if (this.offMessage) {
      this.offMessage();
    }

    if (this.offOdds) {
      this.offOdds();
    }

    // Disconnect socket
    socket.disconnect();
  }

  // Subscribe to markets
  handleSubscribeMarket(): void {
    const marketIds = ['1.240807127', '1.240807128'];
    socket.subscribeMarket(marketIds, 'angular-component');
    console.log('✅ Subscribed to markets:', marketIds);
  }

  // Unsubscribe from markets
  handleUnsubscribeMarket(): void {
    const marketIds = ['1.240807127', '1.240807128'];
    socket.unsubscribeMarket(marketIds);
    console.log('⚠️ Unsubscribed from markets:', marketIds);
  }

  // Manual disconnect
  handleDisconnect(): void {
    socket.disconnect();
    console.log('🔌 Socket disconnected');
  }

  // Manual reconnect
  handleReconnect(): void {
    socket.connect();
    console.log('🔌 Socket reconnecting...');
  }

  // Send test message
  handleSendMessage(): void {
    socket.sendMessage('testMessage', {
      text: 'Hello from Angular!',
      timestamp: Date.now()
    });
    console.log('📤 Message sent');
  }


}
import { Component, OnInit, signal } from '@angular/core';
import { IndexedDbService } from './service/indexdb.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ExchangeService } from '../app/service/exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule]
})
export class App implements OnInit {
  user = signal<any>(null);
  title = signal('librarycheck');
  events: any;

  constructor(private http: HttpClient, private dbService: IndexedDbService) { }
  async ngOnInit() {
  const data = await this.dbService.fetchWithCache(
    'allEventList',
    5 * 60 * 1000,
    () =>
      lastValueFrom(
        this.http.post(
          'https://t20exch.com/api/navigation/allEventsList',
          {}  
        )
      )
  );

  console.log('Events:', data);
}


}




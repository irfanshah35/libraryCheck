import { Component, OnInit } from '@angular/core';
import { AppIdbService } from './service/indexdb.service';
import { ApiService } from './service/api.service';
import { minutesToMs } from 'universe-code/core';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly api: ApiService,
    private readonly idb: AppIdbService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const data = await this.idb.fetchWithCache(
        'allEventList',
        minutesToMs(1),
        () => lastValueFrom(this.api.getAllEvents())
      );

      console.log('All Events:', data);
    } catch (error) {
      console.error('Failed to load events:', error);
    }
  }
}

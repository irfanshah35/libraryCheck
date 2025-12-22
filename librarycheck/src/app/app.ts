import { Component, OnInit } from '@angular/core';
import { AppIdbService } from './service/indexdb.service';
import { ApiService } from './service/api.service';
import { minutesToMs } from 'universe-code/core';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent   {
  constructor(
    private readonly api: ApiService,
    private readonly idb: AppIdbService
  ) {}

  
}

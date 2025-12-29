import { Component } from '@angular/core';
import { ellipsis } from 'universe-code/core';  
import { AppIdbService } from './service/indexdb.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
})
export class AppComponent {
  title = 'This is a very long title which should be truncated';
  value = null;

  constructor(private readonly idb: AppIdbService){}

  get shortTitle() {
    return ellipsis(this.title, 20);
  }

   
}

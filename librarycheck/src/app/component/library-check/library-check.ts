import { Component, OnInit } from '@angular/core';
import { IndexedDbService } from '../../service/indexdb.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-library-check',
  templateUrl: './library-check.html',
  styleUrl: './library-check.css',
})
export class LibraryCheck implements OnInit {
  user: any;

  constructor(
    private dbService: IndexedDbService,
    private http: HttpClient
  ) {}

  async ngOnInit() {
    const apiCall = () =>
      lastValueFrom(this.http.get('https://api.example.com/user'));

    // ✅ Get from IndexedDB, fallback to API
    this.user = await this.dbService.fetchWithCache(
      'current_user',     // key
      5 * 60 * 1000,      // TTL = 5 minutes
      apiCall             // API function
    );

    console.log('User Data:', this.user);
  }
}

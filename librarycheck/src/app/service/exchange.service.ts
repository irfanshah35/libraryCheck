import { Injectable } from '@angular/core';
import { DBManager, Store } from 'universe-code/indexdb';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {
  private manager = new DBManager("UniverseDB", 1);
  public exchangeStore: any;  
  constructor(private http: HttpClient) {}
  async init() {
    if (this.exchangeStore) return; // Already initialized
    const db = await this.manager.connect([
      { name: "exchangeStore", keyPath: "id" }
    ]);
    this.exchangeStore = new Store(db, "exchangeStore");
  }
  async getEvents() {
    await this.init(); // Ensure DB is ready
    console.log("12345sdfghjytredfr")
    const apiCall = () => lastValueFrom(
      this.http.post<any>("https://t20exch.com/api/navigation/allEventsList", { key: "1" })
    ).then(res => res.data);
    return await this.exchangeStore.fetch("allEventList", 3600000, apiCall);
  }
}
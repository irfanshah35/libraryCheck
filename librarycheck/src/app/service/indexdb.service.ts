import { Injectable } from '@angular/core';
import { IdbService as CoreIdbService } from 'universe-code/angular';

interface IdbConfig {
  dbName: string;
  version: number;
  storeName: string;
}

const IDB_CONFIG: IdbConfig = {
  dbName: 'dynamicDB',
  version: 1,
  storeName: 'store',
};

@Injectable({ providedIn: 'root' })
export class AppIdbService {
  private client: any;

  constructor() {
    this.client = new CoreIdbService(IDB_CONFIG);

    // 🔥 Force IndexedDB + objectStore creation when service is constructed
    this.client
      .connect()
      .then(() => {
        console.log('IndexedDB connected / created');
      })
      .catch((err: any) => {
        console.error('IndexedDB connect error:', err);
      });
  }

  fetchWithExpiry(
    key: string,
    ttl: number,
    apiFn: () => Promise<any>
  ) {
    return this.client.getWithExpiry(key, ttl, apiFn);
  }

  get(key: string) {
    return this.client.get(key);
  }

  set(data: any) {
    return this.client.put(data);
  }

  remove(key: string) {
    return this.client.remove(key);
  }

  clear() {
    return this.client.clear();
  }
}

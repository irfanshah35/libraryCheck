import { Injectable } from '@angular/core';
import { IdbService as CoreIdbService } from 'universe-code/indexdb';
// If your bundler does not support subpath exports, use this instead:
// import { IdbService as CoreIdbService } from 'universe-code/dist/indexdb/services/idbService.js';

interface IdbConfig {
  dbName: string;
  version: number;
  storeName: string;
}

// Centralized IndexedDB configuration for this Angular app
const IDB_CONFIG: IdbConfig = {
  dbName: 'db',
  version: 1,
  storeName: 'store',
};

@Injectable({ providedIn: 'root' })
export class AppIdbService {
  private readonly client = new CoreIdbService(IDB_CONFIG);

  fetchWithCache<T>(
    key: string,
    ttlMs: number,
    apiFn: () => Promise<T>
  ): Promise<T | null> {
    return this.client.getWithExpiry(key, ttlMs, apiFn);
  }

  get<T = any>(key: string): Promise<T | null> {
    return this.client.get(key);
  }

  set(data: any): Promise<any> {
    return this.client.put(data);
  }

  remove(key: string): Promise<any> {
    return this.client.remove(key);
  }

  clear(): Promise<any> {
    return this.client.clear();
  }
}
import { Injectable } from '@angular/core';
import { DBManager, DB } from 'universe-code/indexdb';

@Injectable({
  providedIn: 'root'
})
export class IndexedDbService {
  private manager = new DBManager('exchange', 1);
  private db!: IDBDatabase;
  private store: {
    get: (key: string) => Promise<any>;
    getWithExpiry: (
      key: string,
      ttl: number,
      api: () => Promise<any>
    ) => Promise<any>;
    put: (data: any) => Promise<any>;
    remove: (key: string) => Promise<any>;
    clear: () => Promise<any>;
  } | null = null;

  private readonly storeName = 'exchangeStore';

  /**
   * Initialize DB + Store only once (Singleton)
   */
  private async getStore() {
    if (!this.store) {
      if (!this.db) {
        this.db = await this.manager.connect([
          { name: this.storeName }
        ]);
      }

      this.store = {
        get: (key: string) =>
          DB.get(this.db, this.storeName, key),

        getWithExpiry: (
          key: string,
          ttl: number,
          api: () => Promise<any>
        ) =>
          DB.getWithExpiry(this.db, this.storeName, key, ttl, api),

        put: (data: any) =>
          DB.put(this.db, this.storeName, data),

        remove: (key: string) =>
          DB.remove(this.db, this.storeName, key),

        clear: () =>
          DB.clear(this.db, this.storeName)
      };
    }

    return this.store;
  }

  /* =======================
     PUBLIC METHODS
     ======================= */

  async fetchWithCache(
    key: string,
    ttl: number,
    apiFn: () => Promise<any>
  ) {
    const store = await this.getStore();
    return store.getWithExpiry(key, ttl, apiFn);
  }

  async get(key: string) {
    const store = await this.getStore();
    return store.get(key);
  }

  async set(data: any) {
    const store = await this.getStore();
    return store.put(data);
  }

  async remove(key: string) {
    const store = await this.getStore();
    return store.remove(key);
  }

  async clear() {
    const store = await this.getStore();
    return store.clear();
  }
}
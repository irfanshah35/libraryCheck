// src/app/services/network.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';

export const CONFIG = {
    exchEventsStreaming: 'https://t20exch.com/api/streaming/exchEventsStreaming',
};

// Minimal EventEmitter for subscription pattern
class EventEmitter<T = any> {
    private listeners: ((data: T) => void)[] = [];

    on(listener: (data: T) => void) {
        this.listeners.push(listener);
        return () => this.off(listener);
    }

    off(listener: (data: T) => void) {
        this.listeners = this.listeners.filter((l) => l !== listener);
    }

    emit(data: T) {
        this.listeners.forEach((l) => l(data));
    }
}

@Injectable({
    providedIn: 'root',
})
export class NetworkService {
    private streamData: any = {};
    private streamUpdateEmitter = new EventEmitter<any>();

    constructor(private http: HttpClient) { }

    post<T = any>(url: string, body?: any, noErrorToast?: boolean): Observable<T | undefined> {
        return this.http.post<T>(url, body).pipe(
            catchError((error) => {
                console.error('POST Error:', error);
                // optionally show toast here if !noErrorToast
                return of(error?.error || undefined);
            })
        );
    }

    get<T = any>(url: string, params?: any): Observable<T | undefined> {
        let httpParams = new HttpParams();
        if (params) {
            Object.keys(params).forEach((key) => {
                if (params[key] !== undefined && params[key] !== null) {
                    httpParams = httpParams.set(key, params[key]);
                }
            });
        }

        return this.http.get<T>(url, { params: httpParams }).pipe(
            catchError((error) => {
                console.error('GET Error:', error);
                return of(undefined);
            })
        );
    }

    
    getStreamData(params: any): Promise<any> {
        const updatedParams = { ...params, _t: Date.now() };

        return this.post(CONFIG.exchEventsStreaming,updatedParams).toPromise()
            .then((res) => {
                this.streamData = res;
                this.streamUpdateEmitter.emit(res);
                return res;
            })
            .catch((err) => {
                console.error('Error fetching stream data:', err);
                return Promise.reject(err);
            });
    }

    /** Subscribe to stream updates */
    onStreamUpdate(listener: (data: any) => void) {
        return this.streamUpdateEmitter.on(listener);
    }
    
}

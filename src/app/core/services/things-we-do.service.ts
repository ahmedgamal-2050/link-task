import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThingsWeDoService {
  baseUrl: string = "/assets/json/things-we-do.json" 

	constructor(private httpClient: HttpClient) {
	}

  getServices() {
    let url = `${this.baseUrl}`;
    return this.httpClient.get(url).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return of(error);
      }),
    );
  }
}

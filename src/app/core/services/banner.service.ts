import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  baseUrl: string = "https://api.npoint.io" 

	constructor(private httpClient: HttpClient) {
	}

  getBanners() {
    let url = `${this.baseUrl}/fee177346e7875554413`;
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

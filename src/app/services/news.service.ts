import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, of } from 'rxjs';
import { News } from '../constants/home.interface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  baseUrl: string = "https://api.npoint.io" 

	constructor(private httpClient: HttpClient) {
	}

  getNews() {
    let url = `${this.baseUrl}/d275425a434e02acf2f7`;
    return this.httpClient.get(url).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return of(error);
      }),
    );
  }

  getNewsById(news: News) {
    let url = `${this.baseUrl}/d275425a434e02acf2f7/News/${news.id}`;
    return this.httpClient.get(url).pipe(
      map(response => {
        return response;
      }),
      catchError(error => {
        return of(error);
      }),
    );
  }

  getNewsCategories() {
    let url = `${this.baseUrl}/91298d970c27e9a06518`;
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

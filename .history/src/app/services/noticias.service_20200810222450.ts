import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get('http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
  }
}

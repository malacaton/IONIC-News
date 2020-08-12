import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?category=business&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
  }
  getTopHeadlinesCategorias(categoria: string) {
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?category=business&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
  }
}

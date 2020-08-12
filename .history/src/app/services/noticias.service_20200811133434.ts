import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RespuestaTopHeadlines } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const headers = new HttpHeaders({
  'X-Api-key': apiKey
});

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  private ejecutarQuery(query: string): any {
    // return this.http
    //  .get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
    query = apiUrl + query;
    return this.http.get(query, {headers});
  }

  getTopHeadlines() {
    return this.ejecutarQuery(`/top-headlines?country=us`);
  }
  getTopHeadlinesCategorias(categoria: string) {
    return this.http.get<RespuestaTopHeadlines>('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
  }
}

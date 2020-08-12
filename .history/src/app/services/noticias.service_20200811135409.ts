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

  private ejecutarQuery(query: string) {
    //  .get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
    query = apiUrl + query;
    const ret = this.http.get(query, { headers });
    return ret;
  }

  getTopHeadlines() {
    return this.ejecutarQuery(`/top-headlines?country=us`);
  }
  getTopHeadlinesCategorias(categoria: string) {
    return this.ejecutarQuery(`/top-headlines?country=us&category={{categoria}}`);
  }
}

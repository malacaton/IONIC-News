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

  headlinesPage = 0;

  categoriaActual = '';
  categoriaPage = 0;

  constructor(private http: HttpClient) { }

  private ejecutarQuery<T>(query: string) {
    //  .get<RespuestaTopHeadlines>('http://newsapi.org/v2/top-headlines?country=us&apiKey=ebbdd9fa14824dc3beac6790a8203a8f');
    query = apiUrl + query;

    console.log('query:', query);

    const ret = this.http.get<T>(query, { headers });
    return ret;
  }

  getTopHeadlines() {
    this.headlinesPage++;

    const url = `/top-headlines?country=us&page=${this.headlinesPage}`;
    return this.ejecutarQuery<RespuestaTopHeadlines>(url);
  }

  getTopHeadlinesCategorias(categoria: string) {
    if (categoria === categoriaActual) {
      this.categoriaPage++;
    } else {
      this.categoriaPage = 1;
      this.categoriaActual = categoria;
    }

    const url = `/top-headlines?country=us&category=${categoria}`;
    return this.ejecutarQuery<RespuestaTopHeadlines>(url);
  }
}

import { environment } from './../../environments/environment';
import { RespuestaMDB } from './../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  ejecutarQuery<T>(query: string) {
    query = `${URL}${query}?api_key=${apiKey}&language=es&include_image_language=es`;
    console.log(query);
    return this.http.get<T>(query);
  }

  getFeature() {
    return this.ejecutarQuery<RespuestaMDB>('/movie/popular');
  }
}

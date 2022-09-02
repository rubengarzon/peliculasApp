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
  private upcomingPage = 0;
  private page = '';
  constructor(private http: HttpClient) {}

  ejecutarQuery<T>(query: string) {
    query = `${URL}${query}?api_key=${apiKey}&language=es&include_image_language=es${this.page}`;
    return this.http.get<T>(query);
  }

  getPopular() {
    const query = '/movie/popular';
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getNowPlaying() {
    const query = '/movie/now_playing';
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getUpcoming() {
    this.upcomingPage++;
    const query = '/movie/upcoming';
    this.page = '&page=' + this.upcomingPage;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }
}

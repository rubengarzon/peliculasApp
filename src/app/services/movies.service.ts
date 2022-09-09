import { environment } from './../../environments/environment';
import { Genre, RespuestaMDB } from './../interfaces/index';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Detalle, RespuestaCredits } from '../interfaces/index';

const URL = environment.url;
const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private upcomingPage = 0;
  private page = '';
  // eslint-disable-next-line @typescript-eslint/member-ordering
  generos: Genre[] = [];
  constructor(private http: HttpClient) {}

  ejecutarQuery<T>(query: string) {
    query = `${URL}${query}?api_key=${apiKey}&language=es&include_image_language=es${this.page}`;
    console.log(query);
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

  buscarPeliculas(texto: string) {
    return this.http.get(
      // eslint-disable-next-line max-len
      `https://api.themoviedb.org/3/search/movie?query=${texto}&api_key=${apiKey}&language=es&include_image_language=es`
    );
  }

  getUpcoming() {
    this.upcomingPage++;
    const query = '/movie/upcoming';
    this.page = '&page=' + this.upcomingPage;
    return this.ejecutarQuery<RespuestaMDB>(query);
  }

  getMovieDetail(id: number) {
    const query = `/movie/${id}`;
    return this.ejecutarQuery<Detalle>(query);
  }

  getActoresPelicula(id: number) {
    const query = `/movie/${id}/credits`;
    return this.ejecutarQuery<RespuestaCredits>(query);
  }

  buscarPelicula(texto: string) {
    console.log('paso por aquiii', texto);
  }

  cargarGeneros(): Promise<Genre[]> {
    return new Promise((resolve) => {
      this.http
        .get(
          `https://api.themoviedb.org/3/genre/movie/list?a=1&api_key=${apiKey}&language=es&include_image_language=es`
        )
        .subscribe((resp: any) => {
          this.generos = resp.genres;
          console.log(this.generos);
          resolve(this.generos);
        });
    });
  }
}

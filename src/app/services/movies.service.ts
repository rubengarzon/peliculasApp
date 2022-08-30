import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  getFeature() {
    return this.http.get(
      // eslint-disable-next-line max-len
      `https://api.themoviedb.org/3/discover/movie?primary_release_date.lte=2019-01-31&api_key=7d6cebd7375363a80d7b3517c7036ba6&language=es&include_image_language=es`
    );
  }
}

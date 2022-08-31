import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/index';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  peliculasPopulares: Pelicula[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getPopular().subscribe((resp) => {
      this.peliculasPopulares = resp.results;
    });
  }
}

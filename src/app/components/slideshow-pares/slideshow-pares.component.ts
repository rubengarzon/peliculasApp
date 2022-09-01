import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/interfaces';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  constructor() {}

  ngOnInit() {}
}

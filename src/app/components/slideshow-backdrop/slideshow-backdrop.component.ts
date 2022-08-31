import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/index';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {
  @Input() peliculas: Pelicula[] = [];
  constructor() { }

  ngOnInit() {}

}

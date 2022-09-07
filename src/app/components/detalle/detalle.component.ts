import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Detalle, Cast } from '../../interfaces/index';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  detalle: Detalle = {};
  actores: Cast[] = [];
  oculto = 150;

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  constructor(
    private moviesService: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.moviesService.getMovieDetail(this.id).subscribe((resp) => {
      this.detalle = resp;
    });

    this.moviesService.getActoresPelicula(this.id).subscribe((resp) => {
      this.actores = resp.cast;
    });
  }

  volver() {
    this.modalCtrl.dismiss();
  }
}

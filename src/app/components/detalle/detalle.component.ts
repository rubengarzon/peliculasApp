import { ModalController } from '@ionic/angular';
import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Detalle, Cast, Pelicula } from '../../interfaces/index';
import { DataLocalService } from 'src/app/services/data-local.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  detalle: Detalle = {};
  peliculas: Detalle[] = [];
  actores: Cast[] = [];
  oculto = 150;
  estrella = 'star-outline';

  slideOptActores = {
    slidesPerView: 3.3,
    freeMode: true,
    spaceBetween: -5,
  };

  constructor(
    private storage: Storage,
    private moviesService: MoviesService,
    private modalCtrl: ModalController,
    private dataLocal: DataLocalService
  ) {}

  ngOnInit() {
    this.dataLocal
      .existePelicula(this.id)
      .then((existe) => (this.estrella = existe ? 'star' : 'star-outline'));
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

  favorito(pelicula: Detalle) {
    const existe = this.dataLocal.guardarPelicula(pelicula);
    this.estrella = existe ? 'star' : 'star-outline';
  }
}

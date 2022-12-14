import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroImagen',
})
export class FiltroImagenPipe implements PipeTransform {
  transform(peliculas: any[]): any[] {
    return peliculas.filter((pelicula) => pelicula.backdrop_path);
  }
}

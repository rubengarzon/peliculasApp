import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { SwiperModule } from 'swiper/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';

@NgModule({
  declarations: [SlideshowBackdropComponent, SlideshowPosterComponent],
  exports: [SlideshowBackdropComponent, SlideshowPosterComponent],
  imports: [CommonModule, IonicModule, SwiperModule, PipesModule],
})
export class ComponentsModule {}

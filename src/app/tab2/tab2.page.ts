import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  textoBuscar = '';
  ideas: string[] = [
    'El señor de los anillos',
    'Harry Potter',
    'Star Wars',
    'El Hobbit',
  ];
  constructor() {}
  buscar(event) {
    const valor = event.detail.value;
  }
}

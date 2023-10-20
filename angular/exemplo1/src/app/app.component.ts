import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  lista = [
    'ABC',
    'AMERICA',
    'ALECRIM'
  ]

  entrada : string = ''

  isDestaque : boolean = false

  onClick() {
    this.isDestaque = !this.isDestaque
  }
}


import { Component } from '@angular/core';

//import Hero class create in hero.ts
import { Hero } from './hero';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = new Hero(1, 'Windstorm');
 
}

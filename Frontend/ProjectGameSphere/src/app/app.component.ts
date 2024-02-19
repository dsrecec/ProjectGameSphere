import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterLink,
    RouterOutlet
  ],
  standalone: true
})
export class AppComponent {
  title = 'ProjectGameSphere';
}

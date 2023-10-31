import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Football Updates';
  countries: string[] = [
    'England',
    'Spain',
    'Germany',
    'France',
    'Italy'
  ];

}

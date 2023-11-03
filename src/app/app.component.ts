import {Component} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Football Updates';
  showLoader: boolean = false

  constructor(private router: Router) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.showLoader = false;
      }
    });
  }
}

import {Component, DestroyRef, inject} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass'],
    standalone: false
})
export class AppComponent {
  title = 'Football Updates';
  showLoader: boolean = false

  private destroyRef : DestroyRef = inject(DestroyRef);

  constructor(router: Router) {
    router.events.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.showLoader = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.showLoader = false;
      }
    });
  }
}

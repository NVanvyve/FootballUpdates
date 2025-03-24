import {Component, DestroyRef, inject} from '@angular/core';
import {Event, NavigationCancel, NavigationEnd, NavigationStart, Router, RouterOutlet} from '@angular/router';
import {takeUntilDestroyed} from "@angular/core/rxjs-interop";
import {ToolbarComponent} from "./components/toolbar/toolbar.component";
import {LoaderComponent} from "./components/loader/loader.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [
    ToolbarComponent,
    LoaderComponent,
    RouterOutlet,
    NgIf
  ],
  standalone: true
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

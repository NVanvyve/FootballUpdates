import {enableProdMode} from "@angular/core";
import {environment} from "./environments/environment";
import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter, withHashLocation} from "@angular/router";
import {routes} from "./app/app.routes";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {FootballApiInterceptor} from "./app/interceptors/football-api.interceptor";

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideHttpClient(withInterceptorsFromDi()),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballApiInterceptor,
      multi: true
    }
  ]
}).catch(error => console.error(error));

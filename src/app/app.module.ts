import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LeagueDetailsComponent} from './components/league-details/league-details.component';
import {LeagueTableComponent} from './components/league-details/league-table/league-table.component';
import {LoaderComponent} from './components/loader/loader.component';
import {MatTableModule} from "@angular/material/table";
import {HTTP_INTERCEPTORS, provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {FootballApiInterceptor} from "./interceptors/football-api.interceptor";
import {TeamResultComponent} from './components/team-result/team-result.component';
import {TeamDetailsTableComponent} from './components/team-result/team-details-table/team-details-table.component';


@NgModule({
  declarations: [
    AppComponent,
    LeagueDetailsComponent,
    LeagueTableComponent,
    TeamResultComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule, LoaderComponent, ToolbarComponent, TeamDetailsTableComponent],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FootballApiInterceptor,
      multi: true
    },
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}

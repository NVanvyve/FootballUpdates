import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {LeagueDetailsComponent} from './components/league-details/league-details.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {LeagueTableComponent} from './components/league-details/league-table/league-table.component';
import {LoaderComponent} from './components/loader/loader.component';
import {MatTableModule} from "@angular/material/table";


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LeagueDetailsComponent,
    NotFoundComponent,
    LeagueTableComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

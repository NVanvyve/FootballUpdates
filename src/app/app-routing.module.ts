import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LeagueDetailsComponent} from "./components/league-details/league-details.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";

const routerOptions: ExtraOptions = {
  useHash: false,
  enableTracing: false,
};

const routes: Routes = [
  {
    path: 'england',
    component: LeagueDetailsComponent,
  },
  {
    path: 'spain',
    component: LeagueDetailsComponent,
  },
  {
    path: 'france',
    component: LeagueDetailsComponent,
  },
  {
    path: 'germany',
    component: LeagueDetailsComponent,
  },
  {
    path: 'italy',
    component: LeagueDetailsComponent,
  },
  {
    path: '',
    redirectTo: 'england',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

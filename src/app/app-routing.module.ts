import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {LeagueDetailsComponent} from "./components/league-details/league-details.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {leagueGuard} from "./guards/league.guard";
import {defaultCountryGuard} from "./guards/default-country.guard";
import {ErrorComponent} from "./components/error/error.component";
import {TeamResultComponent} from "./components/team-result/team-result.component";
import {teamGuard} from "./guards/team.guard";
import {standingResolver} from "./resolvers/standing.resolver";
import {teamDetailsResolver} from "./resolvers/team-details.resolver";

const routerOptions: ExtraOptions = {
  useHash: true,
  enableTracing: false,
};

const routes: Routes = [
  {
    path: '',
    canActivate: [defaultCountryGuard],
    component: NotFoundComponent // Guard will redirect to default country. NotFoundComponent will never be shown.
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  {
    path: ':country',
    canActivate: [leagueGuard],
    children: [
      {
        path: '',
        component: LeagueDetailsComponent,
        resolve: {
          tableData: standingResolver
        }
      },
      {
        path: ':teamId',
        component: TeamResultComponent,
        canActivate: [teamGuard],
        resolve: {
          teamDetails: teamDetailsResolver
        }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

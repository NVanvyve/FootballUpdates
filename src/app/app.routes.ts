import {Routes} from "@angular/router";
import {defaultCountryGuard} from "./guards/default-country.guard";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {ErrorComponent} from "./components/error/error.component";
import {leagueGuard} from "./guards/league.guard";
import {LeagueDetailsComponent} from "./components/league-details/league-details.component";
import {standingResolver} from "./resolvers/standing.resolver";
import {TeamResultComponent} from "./components/team-result/team-result.component";
import {teamGuard} from "./guards/team.guard";
import {teamDetailsResolver} from "./resolvers/team-details.resolver";

export const routes: Routes = [
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

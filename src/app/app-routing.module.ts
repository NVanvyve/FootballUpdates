import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';

const routerOptions: ExtraOptions = {
  useHash: false,
  enableTracing: false,
};

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

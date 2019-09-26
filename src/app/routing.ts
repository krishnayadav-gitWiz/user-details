import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {UserProfileComponent} from './user-profile/user-profile.component';
import {UserDetailComponent} from './user-detail/user-detail.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'users', component: UserProfileComponent},
      {path: 'users/' + ':id', component: UserDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class Routing {

}

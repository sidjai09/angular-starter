import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {CountryListResolver} from '../core/resolvers/country-list.resolver';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
        resolve: {countryList: CountryListResolver}
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

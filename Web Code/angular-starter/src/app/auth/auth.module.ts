import {NgModule} from '@angular/core';

import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';

import {AuthComponent} from './auth.component';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent],
  imports: [AuthRoutingModule, SharedModule]
})
export class AuthModule {}

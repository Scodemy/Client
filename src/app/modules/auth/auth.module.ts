import { NgModule } from '@angular/core';

import { authComponents } from './';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [...authComponents],
  imports: [AuthRoutingModule]
})
export class AuthModule { }

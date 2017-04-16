import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent, AppRoutingModule } from './';
import { AuthModule } from './modules/auth/auth.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AuthModule, BrowserModule, RouterModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

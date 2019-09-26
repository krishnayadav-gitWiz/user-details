
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserDetailComponent} from './user-detail/user-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Routing} from './routing';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    UserProfileComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    Routing
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }

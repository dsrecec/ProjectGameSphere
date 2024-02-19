import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {UsersComponent} from "./users/users.component";
@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppComponent,

  ],
  providers: [
  ],
  bootstrap: []
})
export class AppModule { }

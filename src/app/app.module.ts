import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './modules/home/home.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { app } from '../../server';



@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RouterOutlet
  ],
  providers : [],
  // bootstrap: [AppComponent]
})
export class appModule { }

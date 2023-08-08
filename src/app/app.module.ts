import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConsommationsComponent } from './consommations/consommations.component';
import { BorneModule } from './bornes/borne.module';
import {HttpClientModule} from '@angular/common/http';
import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ConsommationsComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
  BorneModule, HttpClientModule, AuthModule ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}

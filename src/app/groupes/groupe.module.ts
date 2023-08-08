import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { GroupesComponent } from './groupes.component';

@NgModule({
  declarations: [
    GroupesComponent,
  ],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [GroupesComponent],
})
export class BorneModule {}

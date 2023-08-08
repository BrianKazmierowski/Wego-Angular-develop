import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BornesComponent } from './bornes.component';
import { BorneListComponent } from './borne-list/borne-list.component';
import { BorneAlertComponent } from './Modals/borne-alert/borne-alert.component';
import { BorneAlertParamComponent } from './Modals/borne-alert-param/borne-alert-param.component';
import { BorneAlertAutorisationComponent } from './Modals/borne-alert-autorisation/borne-alert-autorisation.component';
import { BorneAlertFinalisationComponent } from './Modals/borne-alert-finalisation/borne-alert-finalisation.component';
import { BorneEditComponent } from './borne-edit/borne-edit.component';

@NgModule({
  declarations: [
    BornesComponent,
    BorneListComponent,
    BorneAlertComponent,
    BorneAlertParamComponent,
    BorneAlertAutorisationComponent,
    BorneAlertFinalisationComponent,
    BorneEditComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [BorneListComponent, BornesComponent, BorneAlertComponent],
})
export class BorneModule {}

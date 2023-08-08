import { Component, Input, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-borne-alert-param',
  templateUrl: './borne-alert-param.component.html',
  styleUrls: ['./borne-alert-param.component.scss'],
})
export class BorneAlertParamComponent  implements OnInit {

  @Input() modalParent!: IonModal;

  constructor() { }

  ngOnInit() {}

}

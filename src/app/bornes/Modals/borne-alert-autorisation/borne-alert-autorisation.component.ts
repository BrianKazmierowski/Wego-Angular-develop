import { Component, Input, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-borne-alert-autorisation',
  templateUrl: './borne-alert-autorisation.component.html',
  styleUrls: ['./borne-alert-autorisation.component.scss'],
})
export class BorneAlertAutorisationComponent  implements OnInit {

  @Input() modalParent!: IonModal;
  @Input() modalParentRoot!: IonModal;

  constructor() {}

  ngOnInit() {}

}

import { Component, Input, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-borne-alert-finalisation',
  templateUrl: './borne-alert-finalisation.component.html',
  styleUrls: ['./borne-alert-finalisation.component.scss'],
})
export class BorneAlertFinalisationComponent  implements OnInit {

  @Input() modalParent!: IonModal;
  @Input() modalParentRoot!: IonModal;
  @Input() lastModal!: IonModal;

  constructor() { }

  ngOnInit() {}

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Borne } from 'src/app/models/Borne';
import { BorneService } from 'src/app/services/bornes-service';

@Component({
  selector: 'app-borne-edit',
  templateUrl: './borne-edit.component.html',
  styleUrls: ['./borne-edit.component.scss'],
})
export class BorneEditComponent  implements OnInit {

  borne!: Borne;

  constructor(private borneService: BorneService,
    private route:ActivatedRoute) { }

  ngOnInit() {
    const borneId = +this.route.snapshot.params['id'];
    this.borne = this.borneService.getBornesById(borneId);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Borne } from 'src/app/models/Borne';
import { BorneService } from 'src/app/services/bornes-service';

@Component({
  selector: 'app-borne-list',
  templateUrl: './borne-list.component.html',
  styleUrls: ['./borne-list.component.scss'],
})
export class BorneListComponent implements OnInit {

  bornes!: Borne[];
  searchTerm = '';

  constructor(private borneService: BorneService, activatedRoute: ActivatedRoute
    ,private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['searchTerm']) {
        this.bornes = this.borneService.getAllBornesBySearchTerm(params['searchTerm']);
      }
      else {
        this.bornes = this.borneService.getAllBornes();
      }
    });
  }

  ngOnInit(): void {
    if (!this.bornes) {
      this.bornes = this.borneService.getAllBornes();
    }
  }

  search(term: string | any): void {
    if (term)
      this.router.navigateByUrl('/searchBornes/' + term);
  }

}

import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-consommations',
  templateUrl: './consommations.component.html',
  styleUrls: ['./consommations.component.scss'],
})
export class ConsommationsComponent  implements OnInit {

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getAllUSers().subscribe((res: any) => {
      console.log(res);
    })
  }

}

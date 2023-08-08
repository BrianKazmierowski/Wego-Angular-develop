import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss'],
})
export class ForgetPasswordComponent implements OnInit {


  model: any = {
    email: '',
    new_password: ''
  };
  flag!: number;

  constructor() {
  }

  ngOnInit() {
  }

  getData() {
    let data: any = {};
    if (this.model?.email == '' && this.model?.new_password == '') {
      data = {
        title: 'Mot de passe oublié',
        subTitle: 'Entrez votre adresse email',
        button: 'Vérifier'
      };
      this.flag = 1;
    } else {
      data = {
        title: 'Mot de passe reset',
        subTitle: 'Entrez un nouveau mot de passe, il doit faire plus de 8 caractères',
        button: 'Enregistrer'
      };
      this.flag = 2;
    }
    return data;
  }

  onSubmit(form: NgForm) {
    this.model = {
      email: form.value.email || '',
      new_password: form.value.new_password || ''
    };
  }

}

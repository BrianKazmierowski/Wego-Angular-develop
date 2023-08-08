import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  passRegex!: RegExp;
  creationCompte!: boolean;

  constructor(private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.auth.logOut();
    this.creationCompte = true;
    this.passRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    this.loginForm = this.formBuilder.group({
      adresse: [null, [Validators.required]],
      pass: [null, [Validators.required, Validators.pattern(this.passRegex)]]
    });
  }

  onLogIn(): void {
    this.auth.logIn(this.loginForm.value.adresse,
      this.loginForm.value.pass);
      this.router.navigateByUrl('/dashboard');
  }
}

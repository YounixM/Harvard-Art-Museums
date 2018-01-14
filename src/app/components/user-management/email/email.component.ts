import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent {


  state: string = '';
  error: any;

  user = {
    email: null,
    password: null
  }

  constructor(public afAuth: AngularFireAuth, private router: Router) {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.router.navigateByUrl('/user-dashboard');
      }
    });
  }

  submitLoginForm(formData) {

    console.log(this.user);

    if (formData.valid) {
      let email = this.user.email;
      let password = this.user.password;

      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
       (res) => {
          console.log(res);
          console.log('login success');
          this.router.navigateByUrl('/user-dashboard');
        }
      ).catch(function (error) {
        console.log('error');
      })
    }
  }

}

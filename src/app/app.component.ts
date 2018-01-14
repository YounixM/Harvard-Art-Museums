import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { Meta, Title } from "@angular/platform-browser";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userLoggedIn = false;

  constructor(meta: Meta, title: Title, public afAuth: AngularFireAuth, private router: Router) {
    title.setTitle('Harvard Art Musuem - Home');
    meta.addTags([
      { name: 'author', content: 'Younis A M' },
      { name: 'keywords', content: 'Harvard Art Museum, Art Museum' },
      { name: 'description', content: 'Harvard Art Museum' }
    ]);
  }

  ngOnInit() {
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.userLoggedIn = true;
      }else{
         this.router.navigate(['/home']);
      }
    });
  }

  logout() {
    this.afAuth.auth.signOut().then(() => {
      console.log('logout successfull');
      this.userLoggedIn = false;
      this.router.navigate(['/home']);
    }
    );
  }
}

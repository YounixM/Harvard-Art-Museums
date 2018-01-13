import { Component } from '@angular/core';
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
  constructor(meta: Meta, title: Title) {

    title.setTitle('Harvard Art Musuem - Home');

    meta.addTags([
      { name: 'author', content: 'Younis A M' },
      { name: 'keywords', content: 'Harvard Art Museum, Art Museum' },
      { name: 'description', content: 'Harvard Art Museum' }
    ]);

  }
}

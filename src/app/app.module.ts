import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EmbedVideo } from 'ngx-embed-video';

//Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExhibitionsComponent } from './components/exhibitions/exhibitions.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ImagesComponent } from './components/images/images.component';
import { ShopComponent } from './components/shop/shop.component';

//Services
import { HarvardArtMuseumService } from './services/harvardartmuseum.service';
import { VimeoService } from './services/vimeo.service';
import { CollectionInfoService } from './services/collectionInfo.service';

// Firebase imports and config
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CreditsComponent } from './components/credits/credits.component';
import { PublicationsComponent } from './components/publications/publications.component';
import { PublicationComponent } from './components/publication/publication.component';

export const firebaseConfig = {
  apiKey: "AIzaSyC69KhKmbPJOhAYWuvB0DBjSz_77Yetrcs",
  authDomain: "harvardartmuseums-7ef16.firebaseapp.com",
  databaseURL: "https://harvardartmuseums-7ef16.firebaseio.com",
  projectId: "harvardartmuseums-7ef16",
  storageBucket: "",
  messagingSenderId: "640456681484"
};


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    EmbedVideo.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ImageDetailsComponent,
    CollectionsComponent,
    ExhibitionsComponent,
    ExhibitionComponent,
    CollectionComponent,
    ImagesComponent,
    ShopComponent,
    CreditsComponent,
    PublicationsComponent,
    PublicationComponent
  ],
  providers: [
    HarvardArtMuseumService,
    VimeoService,
    CollectionInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

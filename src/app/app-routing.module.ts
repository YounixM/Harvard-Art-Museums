import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';
import { EmbedVideo } from 'ngx-embed-video';

import { HomeComponent } from './components/home/home.component';
import { ImagesComponent } from './components/images/images.component';
import { ImageDetailsComponent } from './components/image-details/image-details.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { ExhibitionsComponent } from './components/exhibitions/exhibitions.component';
import { ExhibitionComponent } from './components/exhibition/exhibition.component';
import { CollectionComponent } from './components/collection/collection.component';
import { ShopComponent } from './components/shop/shop.component';
import { PublicationComponent } from './components/publication/publication.component';

const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'art-work',
        component: ImagesComponent
    },
    {
        path: 'image/:imageID',
        component: ImageDetailsComponent
    },
    {
        path: 'collection/:collectionID',
        component: CollectionComponent
    },
    {
        path: 'collections',
        component: CollectionsComponent
    },
    {
        path: 'exhibition/:exhibitionID',
        component: ExhibitionComponent
    },
    {
        path: 'exhibitions',
        component: ExhibitionsComponent
    },
    {
        path: 'publication/:publicationID',
        component: PublicationComponent
    },
    {
        path: 'videos',
        loadChildren: 'app/components/videos/videos.module#VideosModule'
    },
    {
        path: 'shop',
        component: ShopComponent
    },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];


export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules });


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';
import { CollectionInfoService } from './../../services/collectionInfo.service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {

  collections = [];

  constructor(private _harvardArtMuseumService: HarvardArtMuseumService, 
              public _collectionInfoService : CollectionInfoService,
              private _router : Router) {
    console.log('constructor - collections');
  }

  ngOnInit() {
    this._harvardArtMuseumService.getCollections().subscribe(
      res => {
        console.log(res);
        this.collections = res['records'];
      }
    )
  }

  goToCollection(collection){
    console.log('go to collection');
    console.log(collection);
    this._collectionInfoService.selectedCollectionInfo = collection;
    this._router.navigate(['/collection', collection.id]);
    // this._router.navigate(['/image', image.imageid]);
    
  }

}

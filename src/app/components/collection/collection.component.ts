import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionInfoService } from './../../services/collectionInfo.service';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  collectionID;
  collectionInfo;

  constructor(router: Router,
    private activatedRoute: ActivatedRoute, public _collectionInfoService : CollectionInfoService, private _harvardArtMuseumService : HarvardArtMuseumService) {
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.collectionID = this.activatedRoute.snapshot.params['collectionID'];
    console.log(this.collectionID);
    this.collectionInfo = this._collectionInfoService.selectedCollectionInfo;
    console.log(this.collectionInfo); 

    if(this.collectionInfo == null){
      this.getCollectionByID(this.collectionID);
    }

  }


  getCollectionByID(collectionID){
    this._harvardArtMuseumService.getCollectionByID(collectionID).subscribe(
      res => {
        this.collectionInfo = res;
        console.log(this.collectionInfo); 
      }
    )
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CollectionInfoService } from './../../services/collectionInfo.service';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.scss']
})
export class PublicationComponent implements OnInit {

  publicationID;
  publicationInfo;

  constructor(router: Router,
    private activatedRoute: ActivatedRoute, public _collectionInfoService : CollectionInfoService, private _harvardArtMuseumService : HarvardArtMuseumService) {
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.publicationID = this.activatedRoute.snapshot.params['publicationID'];
    console.log(this.publicationID);
    this.publicationInfo = this._collectionInfoService.selectedCollectionInfo;
    console.log(this.publicationInfo); 

    if(this.publicationInfo == null){
      this.getCollectionByID(this.publicationID);
    }

  }


  getCollectionByID(publicationID){
    this._harvardArtMuseumService.getPublicationByID(publicationID).subscribe(
      res => {
        this.publicationInfo = res;
        console.log(this.publicationInfo); 
      }
    )
  }
}

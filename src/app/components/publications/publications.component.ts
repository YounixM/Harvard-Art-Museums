import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';
import { CollectionInfoService } from './../../services/collectionInfo.service';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publications = [];

  constructor(private _harvardArtMuseumService: HarvardArtMuseumService,
  private _collectionInfoService : CollectionInfoService,
  private _router : Router) { }

  ngOnInit() {
    this._harvardArtMuseumService.getPublications().subscribe(
      res => {
        this.publications = res['records'];
      }
    )
  }


  goToPublication(publication) {
    console.log('go to collection');
    console.log(publication);
    this._collectionInfoService.selectedCollectionInfo = publication;
    this._router.navigate(['/publication', publication.id]);
  }

}

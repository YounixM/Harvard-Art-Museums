import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';

@Component({
  selector: 'app-image-details',
  templateUrl: './image-details.component.html',
  styleUrls: ['./image-details.component.scss']
})
export class ImageDetailsComponent implements OnInit {

  imageID = null;
  imageDetails;
  routeSub;

  constructor(router: Router,
    private activatedRoute: ActivatedRoute,
    private _harvardArtMuseumService : HarvardArtMuseumService) {
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.imageID = this.activatedRoute.snapshot.params['imageID'];

    if(this.imageID != null){
      this._harvardArtMuseumService.getImage(this.imageID).subscribe(
        res => {
          this.imageDetails = res;
          console.log(this.imageDetails);
        }
      )
    }
  }


}

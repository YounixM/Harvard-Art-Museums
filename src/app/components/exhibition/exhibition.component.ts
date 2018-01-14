import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';

@Component({
  selector: 'app-exhibition',
  templateUrl: './exhibition.component.html',
  styleUrls: ['./exhibition.component.scss']
})
export class ExhibitionComponent implements OnInit {

  exhibition;
  exhibitionID;

  constructor(router: Router,
    private activatedRoute: ActivatedRoute,
    private _harvardArtMuseumService: HarvardArtMuseumService) {
  }

  ngOnInit() {

    this.exhibitionID = this.activatedRoute.snapshot.params['exhibitionID'];

    if (this.exhibitionID != null) {

      this._harvardArtMuseumService.getExhitbition(this.exhibitionID).subscribe(
        res => {
          console.log(res);
          this.exhibition = res;
        }
      )
    }

  }

  
}

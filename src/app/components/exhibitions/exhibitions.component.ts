import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';

@Component({
  selector: 'app-exhibitions',
  templateUrl: './exhibitions.component.html',
  styleUrls: ['./exhibitions.component.scss']
})
export class ExhibitionsComponent implements OnInit {

  exhibitions;
  currentExhibitions;
  upcomingExhibitions;
  pastExhibitions;

  constructor(private _harvardArtMuseumService: HarvardArtMuseumService, private _router : Router) {
    console.log('constructor - home');
  }

  ngOnInit() {
    this._harvardArtMuseumService.getCurrentExhitbitions().subscribe(
      res => {
        console.log(res);
        this.currentExhibitions = res['records'];
      }
    )

    this._harvardArtMuseumService.getCurrentExhitbitions().subscribe(
      res => {
        console.log(res);
        this.upcomingExhibitions = res['records'];
      }
    )

    this._harvardArtMuseumService.getCurrentExhitbitions().subscribe(
      res => {
        console.log(res);
        this.pastExhibitions = res['records'];
      }
    )
  }


  goToExhibition(exhibition) {
    this._router.navigate(['/exhibition', exhibition.id]);
  }

}

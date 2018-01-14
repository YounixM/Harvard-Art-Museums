import { Component, OnInit } from '@angular/core';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {


  imagesArr = [];
  page_no = 1;
  loadingImages = false;

  constructor(private _harvardArtMuseumService: HarvardArtMuseumService, private _router: Router) {
    console.log('constructor - home');
  }

  ngOnInit() {
    console.log('ng on init - home');
    this.getImages();
  }

  getImages() {
    this.loadingImages = true;
    this._harvardArtMuseumService.getImages(this.page_no).subscribe(
      res => {
        this.imagesArr = this.imagesArr.concat(res['records']);
        console.log(res);
        this.loadingImages = false;
      }
    )
  }


  goToImageDetails(image) {
    console.log(image.imageid);
    this._router.navigate(['/image', image.imageid]);
  }

  goToNextPage() {
    this.page_no = this.page_no + 1;

    this.getImages();
  }

  goToPreviousPage() {
    if (this.page_no > 1) {
      this.page_no = this.page_no - 1;
      this.getImages();
    }
  }

}


import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HarvardArtMuseumService } from './../../services/harvardartmuseum.service';
import { VimeoService } from './../../services/vimeo.service';
import { EmbedVideoService } from 'ngx-embed-video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  page_no = 1;
  videos = [];
  videosArr = [];
  loadingVideos = false;
  iframe_html: any;

  constructor(private _harvardArtMuseumService: HarvardArtMuseumService,
    public sanitizer: DomSanitizer,
    private _vimeoService: VimeoService,
    private _embedVideoService: EmbedVideoService) {

  }


  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    this.loadingVideos = true;
    this._harvardArtMuseumService.getVideos(this.page_no).subscribe(
      res => {
        this.videos = this.videos.concat(res['records']);
        console.log(this.videos);
        this.handleVideos();
        this.loadingVideos = false;
      }
    )
  }

  handleVideos() {
    for (let i = 0; i < this.videos.length; i++) {
      this.videos['vimeoVideoURL'] = null;

      let videoID = this.videos[i].primaryurl.split('/');
      // console.log(videoID);

      videoID = videoID[videoID.length - 1];
      // console.log(videoID);


      // // this.videos['vimeoVideoURL'] = '//player.vimeo.com/video/' + videoID + '?portrait=0';

      // // this._vimeoService.getVimeoVideoURL(this.videos[i].primaryurl).subscribe(
      // //   res => {
      // //     console.log('video res');
      // //     console.log(res);
      // //   }
      // // )

      // //player.vimeo.com/video/27577981?portrait=0

      console.log(this._embedVideoService.embed_vimeo(videoID));
      console.log(this._embedVideoService.embed(this.videos[i].primaryurl));

      this.iframe_html = this._embedVideoService.embed(this.videos[i].primaryurl);
    }
  }


  goToNextPage() {
    this.page_no = this.page_no + 1;

    this.getVideos();
  }

  goToPreviousPage() {
    if (this.page_no > 1) {
      this.page_no = this.page_no - 1;
      this.getVideos();
    }
  }

}

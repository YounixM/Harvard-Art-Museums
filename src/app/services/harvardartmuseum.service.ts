import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class HarvardArtMuseumService {

    base_url = 'https://api.harvardartmuseums.org';
    client_key = 'a74337d0-f6a0-11e7-a83e-c37c83caef33';

    constructor(private _http: HttpClient) {
    }

    getImages(page_no) {
        let apiURL = this.base_url + '/image' + '?apikey=' + this.client_key + '&q=height:>500&height:<600' + '&page=' + page_no;
        return this._http.get(apiURL).publishReplay(1)
            .refCount();
    }

    getImage(imageID) {
        let apiURL = this.base_url + '/image/' + imageID + '?apikey=' + this.client_key;
        return this._http.get(apiURL)
    }


    getVideos(page_no) {
        let apiURL = this.base_url + '/video/' + '?apikey=' + this.client_key + '&page=' + page_no;
        return this._http.get(apiURL)
    }

    getCollections() {
        let apiURL = this.base_url + '/object' + '?apikey=' + this.client_key;
        return this._http.get(apiURL)
    }

    getCollectionByID(collectionID) {
        let apiURL = this.base_url + '/object/' + collectionID + '?apikey=' + this.client_key;
        return this._http.get(apiURL)
    }

    getCurrentExhitbitions() {
        let apiURL = this.base_url + '/exhibition' + '?apikey=' + this.client_key + '&sort=chronological&status=current&hasimage=1';
        return this._http.get(apiURL)
    }

    getUpcomingExhitbitions() {
        let apiURL = this.base_url + '/exhibition' + '?apikey=' + this.client_key + '&sort=chronological&status=upcoming&hasimage=1';
        return this._http.get(apiURL)
    }

    getPastExhitbitions() {
        let apiURL = this.base_url + '/exhibition' + '?apikey=' + this.client_key + '&sort=chronological&status=past&hasimage=1';
        return this._http.get(apiURL)
    }

    getExhitbition(ExhibitionID) {
        let apiURL = this.base_url + '/exhibition/' + ExhibitionID + '?apikey=' + this.client_key;
        return this._http.get(apiURL)
    }


    getPublications() {
        let apiURL = this.base_url + '/publication/' + '?apikey=' + this.client_key + '&hasimage=1';
        return this._http.get(apiURL)
    }

    getPublicationByID(publicationID) {
        let apiURL = this.base_url + '/publication/' + publicationID + '?apikey=' + this.client_key;
        return this._http.get(apiURL)
    }
}

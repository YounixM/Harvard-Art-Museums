import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class VimeoService {
    constructor(private _http: HttpClient) {
    }

    getVimeoVideoURL(url){
        let endpoint = 'http://www.vimeo.com/api/oembed.json';

        let reqURL =  endpoint + '?url=' + url;

        let headers = new HttpHeaders();
        headers = headers.set('Access-Control-Allow-Headers', 'http://localhost:4400');
        headers = headers.set('Access-Control-Allow-Headers', '*');
        return this._http.get(reqURL, { headers : headers});
    }
}

import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class NewsFeed {

    constructor(private http: Http){

    }

    getRssFeed(){
        let rssfeed = this.http.get(`https://newsapi.org/v1/sources?language=en`);
        console.log(rssfeed);
        return rssfeed;
    }
}
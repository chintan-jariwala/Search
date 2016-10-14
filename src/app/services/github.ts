import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { Observable } from "rxjs/Observable";
import { Response } from '@angular/http/src/static_response';

@Injectable()
export class GitHubService {
    constructor (private http: Http){

    }

    getRepos(username){
        let repos = this.http.get(`https://api.github.com/users/${username}/repos`);
        console.log(repos);
        return repos;
    }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewsFeed } from '../../app/services/ressfeed'


@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers: [NewsFeed]
})
export class News {
  public dataFromFeed;
  public channel;

  constructor(private rss: NewsFeed) {
     this.getRssFeed();
  }
  
  getRssFeed(){
    this.rss.getRssFeed().subscribe(
      data=> {
        this.dataFromFeed = data.json();
        console.log(this.dataFromFeed);
        this.channel = this.dataFromFeed.sources;
        console.log(this.channel[0].urlsToLogos);
        console.log(this.channel[0].urlsToLogos.medium);
      },
      err => console.error(err),
            () => console.log('getRepos completed')
    );
  }

}

import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { ImageSearch } from '../image-search/image-search';
import { News } from '../news/news';


@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  tab1Root: any = HomePage;
  tab2Root: any = ImageSearch;
  tab3Root: any = News;
  constructor() {}
}

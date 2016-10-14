import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ImageSearch } from '../pages/image-search/image-search'
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { News } from '../pages/news/news';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ImageSearch,
    TabsPage,
    News
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ImageSearch,
    TabsPage,
    News
  ],
  providers: []
})
export class AppModule {}

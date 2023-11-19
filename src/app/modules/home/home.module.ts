import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { CoreModule } from '../../core/core.module';
import { HighlightBannerComponent } from './components/highlight-banner/highlight-banner.component';
import { ThingsWeDoComponent } from './components/things-we-do/things-we-do.component';
import { LatestNewsComponent } from './components/latest-news/latest-news.component';
import { HttpClientModule } from '@angular/common/http';
import { BannerService } from '../../services/banner.service';
import { NewsService } from '../../services/news.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    HighlightBannerComponent,
    ThingsWeDoComponent,
    LatestNewsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CoreModule,
    HttpClientModule,
  ],
  providers: [
    BannerService,
    NewsService,
  ]
})
export class HomeModule { }

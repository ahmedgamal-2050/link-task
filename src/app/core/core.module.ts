import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NewsCardItemComponent } from './components/news-card-item/news-card-item.component';
import { ServiceCardItemComponent } from './components/service-card-item/service-card-item.component';
import { PillTabItemComponent } from './components/pill-tab-item/pill-tab-item.component';
import { ThingsWeDoService } from './services/things-we-do.service';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsCardItemComponent,
    ServiceCardItemComponent,
    PillTabItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsCardItemComponent,
    ServiceCardItemComponent,
    PillTabItemComponent,
  ],
  providers: [
    ThingsWeDoService,
  ]
})
export class CoreModule { }

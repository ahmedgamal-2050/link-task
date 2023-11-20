import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { NewsCardItemComponent } from './components/news-card-item/news-card-item.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NewsCardItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    NewsCardItemComponent,
  ]
})
export class CoreModule { }

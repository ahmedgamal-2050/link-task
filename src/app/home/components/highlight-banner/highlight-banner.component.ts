import { Component } from '@angular/core';
import { BannerService } from '../../../core/services/banner.service';
import { Slide } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-highlight-banner',
  standalone: false,
  templateUrl: './highlight-banner.component.html',
  styleUrl: './highlight-banner.component.scss'
})
export class HighlightBannerComponent {
  slides: Slide[] = [];

  constructor(private bannerService: BannerService) {
    this.getBanners();
  }

  getBanners() {
    this.bannerService.getBanners().subscribe((response: any) => {
      this.slides = response.slides;
    })
  }
}

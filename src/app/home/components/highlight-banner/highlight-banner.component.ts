import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BannerService } from '../../../core/services/banner.service';
import { Slide } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-highlight-banner',
  standalone: false,
  templateUrl: './highlight-banner.component.html',
  styleUrl: './highlight-banner.component.scss'
})
export class HighlightBannerComponent implements OnChanges {
  @Input() slides: Slide[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['slides']) {
      this.slides = changes['slides'].currentValue;
    }
  }
}

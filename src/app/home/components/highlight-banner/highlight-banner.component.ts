import { Component, Input } from '@angular/core';
import { Slide } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-highlight-banner',
  standalone: false,
  templateUrl: './highlight-banner.component.html',
  styleUrl: './highlight-banner.component.scss'
})
export class HighlightBannerComponent {
  @Input() slides: Slide[] = [];
}

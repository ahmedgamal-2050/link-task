import { Component, Input } from '@angular/core';
import { News } from '../../constants/home.interface';
@Component({
  selector: 'app-news-card-item',
  templateUrl: './news-card-item.component.html',
  styleUrl: './news-card-item.component.scss'
})
export class NewsCardItemComponent {
  @Input() newsInfo!: News;

  onImageError(event: any) {
    event.src = 'https://placehold.jp/360x322.png';
  }
}

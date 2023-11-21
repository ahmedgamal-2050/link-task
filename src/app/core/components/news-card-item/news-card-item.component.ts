import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { News, NewsCategory } from '../../constants/home.interface';
@Component({
  selector: 'app-news-card-item',
  templateUrl: './news-card-item.component.html',
  styleUrl: './news-card-item.component.scss'
})
export class NewsCardItemComponent implements OnChanges {
  @Input() newsInfo!: News;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['newsInfo']) {
      this.newsInfo = changes['newsInfo'].currentValue;
    }
  }

  onImageError(event: any) {
    event.src = 'https://placehold.jp/360x322.png';
  }
}

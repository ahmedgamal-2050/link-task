import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { News, NewsCategory } from '../../constants/home.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news-card-item',
  templateUrl: './news-card-item.component.html',
  styleUrl: './news-card-item.component.scss'
})
export class NewsCardItemComponent implements OnChanges {
  @Input() newsInfo!: News;
  @Input() newsCategories: NewsCategory[] = [];

  constructor(private newsService: NewsService){}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['newsInfo']) {
      this.newsInfo = changes['newsInfo'].currentValue;
    }
    if (changes && changes['newsCategories']) {
      this.newsCategories = changes['newsCategories'].currentValue;
    }
  }

  getCategoryName(categoryId: number) {
    this.newsService.getCategoryNameById(categoryId, this.newsCategories)
  }
}

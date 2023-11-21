import { Component, EventEmitter, Input, Output } from '@angular/core';
import { News, NewsCategory } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-latest-news',
  standalone: false,
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  @Input() news: News[] = [];
  @Input() lastestNews: News[] = [];
  @Input() newsCategories: NewsCategory[] = [];
  @Input() filteredNews: News[] = [];
  @Input() activeCategory: number = -1;
  @Output() filterNews = new EventEmitter<number>();

  filterNewsByCategory(categoryId: number) {
    this.filterNews.emit(categoryId);
  }
}

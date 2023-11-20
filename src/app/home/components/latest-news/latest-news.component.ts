import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { News, NewsCategory } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-latest-news',
  standalone: false,
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent implements OnChanges {
  @Input() news: News[] = [];
  @Input() lastestNews: News[] = [];
  @Input() newsCategories: NewsCategory[] = [];
  @Input() filteredNews: News[] = [];
  @Input() activeCategory: number = -1;
  @Output() filterNews = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['news']) {
      this.news = changes['news'].currentValue;
    }
    if (changes && changes['lastestNews']) {
      this.lastestNews = changes['lastestNews'].currentValue;
    }
    if (changes && changes['newsCategories']) {
      this.newsCategories = changes['newsCategories'].currentValue;
    }
    if (changes && changes['filteredNews']) {
      this.filteredNews = changes['filteredNews'].currentValue;
    }
    if (changes && changes['activeCategory']) {
      this.activeCategory = changes['activeCategory'].currentValue;
    }
  }

  filterNewsByCategory(categoryId: number) {
    this.filterNews.emit(categoryId);
  }
}

import { Component } from '@angular/core';
import { News, NewsCategory } from '../../../../constants/home.interface';
import { NewsService } from '../../../../services/news.service';

@Component({
  selector: 'app-latest-news',
  standalone: false,
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  news: News[] = [];
  lastestNews: News[] = [];
  newsCategories: NewsCategory[] = [];
  filteredNews: News[] = [];
  activeCategory: number = -1;

  constructor(private newsService: NewsService) {
    this.getNews();
    this.getNewsCategories();
  }

  getNews() {
    this.newsService.getNews().subscribe((response: any) => {
      this.news = response.News;
      this.lastestNews = this.news.filter((item: News) => item.showOnHomepage === "yes");
    })
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((response: any) => {
      this.newsCategories = response.newsCategory;
    })
  }

  getCategoryId(categoryId: number): string {
    if (this.newsCategories && this.newsCategories.length > 0) {
      const category: NewsCategory | undefined = this.newsCategories.find((item: NewsCategory) => item.id === categoryId);
      if (category) {
        return category.name;
      }
      else {
        return "";
      }
    }
    else {
      return "";
    }
  }

  filterNewsByCategory(categoryId: number) {
    this.activeCategory = categoryId;
    this.filteredNews = this.news.filter((item: News) => +item.categoryID === categoryId);
    console.log("🚀 ~ file: latest-news.component.ts:52 ~ LatestNewsComponent ~ filterNewsByCategory ~ this.filteredNews:", this.filteredNews)
  }
}

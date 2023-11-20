import { Component } from '@angular/core';
import { News, NewsCategory, Slide } from '../core/constants/home.interface';
import { NewsService } from '../core/services/news.service';
import { BannerService } from '../core/services/banner.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  slides: Slide[] = [];
  news: News[] = [];
  lastestNews: News[] = [];
  newsCategories: NewsCategory[] = [];
  filteredNews: News[] = [];
  activeCategory: number = -1;

  constructor(private bannerService: BannerService, private newsService: NewsService) {
    this.getBanners();
    this.getNews();
    this.getNewsCategories();
  }

  getBanners() {
    this.bannerService.getBanners().subscribe((response: any) => {
      this.slides = response.slides;
    })
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

  filterNewsByCategory(categoryId: number) {
    this.activeCategory = categoryId;
    this.filteredNews = categoryId !== -1 ? this.news.filter((item: News) => +item.categoryID === categoryId) : [];
  }
}

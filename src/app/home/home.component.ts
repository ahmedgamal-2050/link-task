import { Component } from '@angular/core';
import { News, NewsCategory, NewsCategoryResponse, NewsResponse, Slide, SlideResponse } from '../core/constants/home.interface';
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
    this.getNewsCategories();
    this.getNews();
  }

  getBanners() {
    this.bannerService.getBanners().subscribe((response: SlideResponse) => {
      this.slides = response.slides;
    })
  }

  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((response: NewsCategoryResponse) => {
      this.newsCategories = response.newsCategory;
    })
  }

  getNews() {
    this.newsService.getNews().subscribe((response: NewsResponse) => {
      this.news = response.News;
      this.news.map((item: News) => {
        item.categoryName = this.getCategoryNameById(+item.categoryID);
        return item;
      }) 
      this.lastestNews = this.news.filter((item: News) => item.showOnHomepage === "yes");
    })
  }

  getCategoryNameById(categoryId: number): string {
    if (this.newsCategories?.length > 0) {
      return (<NewsCategory>this.newsCategories.find((item: NewsCategory) => item.id === categoryId)).name;
    }
    else {
      return "";
    }
  }

  filterNewsByCategory(categoryId: number) {
    this.activeCategory = categoryId;
    this.filteredNews = categoryId !== -1 ? this.news.filter((item: News) => +item.categoryID === categoryId) : [];
  }
}

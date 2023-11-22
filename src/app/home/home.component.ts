import { Component } from '@angular/core';
import { News, NewsCategory, NewsCategoryResponse, NewsResponse, Service, ServicesResponse, Slide, SlideResponse } from '../core/constants/home.interface';
import { NewsService } from '../core/services/news.service';
import { BannerService } from '../core/services/banner.service';
import { ThingsWeDoService } from '../core/services/things-we-do.service';

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
  services: Service[] = [];

  constructor(
    private bannerService: BannerService,
    private newsService: NewsService,
    private thingsWeDoService: ThingsWeDoService,
  ) {
    this.getBanners();
    this.getServices();
    this.getNewsCategories();
    this.getNews();
  }

  /**
  * Get banner/slides data, This variable is used to show hero slides on homepage.
  */
  getBanners() {
    this.bannerService.getBanners().subscribe((response: SlideResponse) => {
      this.slides = response.slides;
    })
  }

  /**
  * Get banner/slides data, This variable is used to show hero slides on homepage.
  */
  getServices() {
    this.thingsWeDoService.getServices().subscribe((response: ServicesResponse) => {
      this.services = response.services;
    })
  }

  /**
  * Get news categories, This variable is used to show news categories on homepage.
  */
  getNewsCategories() {
    this.newsService.getNewsCategories().subscribe((response: NewsCategoryResponse) => {
      this.newsCategories = response.newsCategory;
    })
  }

  /**
  * Get news, This variable is used to show news on homepage.
  */
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

  // Returns the name of the category
  getCategoryNameById(categoryId: number): string {
    if (this.newsCategories?.length > 0) {
      return (<NewsCategory>this.newsCategories.find((item: NewsCategory) => item.id === categoryId)).name;
    }
    else {
      return "";
    }
  }

  // Returns filtered news of the specific category
  filterNewsByCategory(categoryId: number) {
    this.activeCategory = categoryId;
    this.filteredNews = categoryId !== -1 ? this.news.filter((item: News) => +item.categoryID === categoryId) : [];
  }
}

export interface MainNavigator {
  pageName: string;
  routerLink: string;
}

export interface Slide {
  brief: string;
  category: string;
  colorCode: string;
  id: number;
  imgUrl: string;
  itemUrl: string;
  order: number;
  title: string;
  videoUrl: string;
}

export interface News {
  categoryID: string;
  content: string;
  description: string;
  id: string;
  publishedDate: Date | string;
  showOnHomepage: string;
  title: string;
  urlToImage: string;
}

export interface NewsCategory {
  id: number;
  name: string;
}
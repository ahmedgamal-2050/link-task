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
  imageLg: string;
  shortDescription: string;
  longDescription: string;
  publishDate: Date | string;
  category: string;
}
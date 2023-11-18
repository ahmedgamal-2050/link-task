export interface MainNavigator {
  pageName: string;
  routerLink: string;
}

export interface News {
  imageLg: string;
  shortDescription: string;
  longDescription: string;
  publishDate: Date | string;
  category: string;
}
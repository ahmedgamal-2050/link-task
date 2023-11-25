import { Component } from '@angular/core';
import { MainNavigator } from '../../constants/home.interface';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLanguageCode: string = 'EN'; //Current Options => EN, AR
  mainNavigatorsList: MainNavigator[] = [
    {
      pageName: 'Home',
      routerLink: ''
    },
    {
      pageName: 'About us',
      routerLink: '/about-us'
    },
    {
      pageName: 'News',
      routerLink: '/news'
    },
    {
      pageName: 'Contact us',
      routerLink: '/contact-us'
    }
  ];

  constructor(private translocoService: TranslocoService) {}

  switchLanguage() {
    if (this.currentLanguageCode === 'EN') {
      this.currentLanguageCode = 'AR';
    }
    else {
      this.currentLanguageCode = 'EN';
    }
    this.translocoService.setActiveLang(this.currentLanguageCode.toLocaleLowerCase());
  }
}

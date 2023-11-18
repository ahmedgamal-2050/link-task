import { Component } from '@angular/core';
import { News } from '../../../../constants/home.interface';

@Component({
  selector: 'app-latest-news',
  standalone: false,
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss'
})
export class LatestNewsComponent {
  lastestNewsList: News[] = [
    {
      shortDescription: "Let us commit to do our part and advance the promise of equality, justice...",
      longDescription: "Let us commit to do our part and advance the promise of equality, justice...",
      imageLg: "assets/images/home/top-news/news1-lg.png",
      publishDate: "08/12/2022",
      category: "Economics"
    },
    {
      shortDescription: "In interactive live seminar top lectures of the IHF present current topics for all target groups ...",
      longDescription: "In interactive live seminar top lectures of the IHF present current topics for all target groups ...",
      imageLg: "assets/images/home/top-news/news2-lg.png",
      publishDate: "08/12/2022",
      category: "Sport"
    },
    {
      shortDescription: "Libya to construct solar plant with Total Energies",
      longDescription: "Libya to construct solar plant with Total Energies",
      imageLg: "assets/images/home/top-news/news3-lg.png",
      publishDate: "08/12/2022",
      category: "Technology"
    },
    {
      shortDescription: "The 2nd IHF Wheelchair Handball Seminar begins this Saturday.",
      longDescription: "The 2nd IHF Wheelchair Handball Seminar begins this Saturday.",
      imageLg: "assets/images/home/top-news/news4-lg.png",
      publishDate: "08/12/2022",
      category: "Sport"
    },
    {
      shortDescription: "President El Sisi Unveils “Egypt Vision 2030” Sustainabl…",
      longDescription: "President El Sisi Unveils “Egypt Vision 2030” Sustainabl…",
      imageLg: "assets/images/home/top-news/news5-lg.png",
      publishDate: "08/12/2022",
      category: "Economics"
    },
    {
      shortDescription: "COVID-19: get the latest updates The MoF is leading work across government response to COVID-19.",
      longDescription: "COVID-19: get the latest updates The MoF is leading work across government response to COVID-19.",
      imageLg: "assets/images/home/top-news/news6-lg.png",
      publishDate: "08/12/2022",
      category: "Health"
    },
  ]
}

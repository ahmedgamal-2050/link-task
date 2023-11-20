import { Component } from '@angular/core';
import { Service } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-things-we-do',
  standalone: false,
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss'
})
export class ThingsWeDoComponent {
  services: Service[] = [
    {
      position: 1,
      id: 1,
      urlToImage: "assets/images/home/things-we-do/carftymind-lg.png",
      link: "",
      title: "Carfty Mind"
    },
    {
      position: 2,
      id: 2,
      urlToImage: "assets/images/home/things-we-do/services-lg.png",
      link: "",
      title: "Services"
    },
    {
      position: 3,
      id: 3,
      urlToImage: "assets/images/home/things-we-do/enovision-lg.png",
      link: "",
      title: "Enovision"
    },
    {
      position: 4,
      id: 4,
      urlToImage: "assets/images/home/things-we-do/dynamic365-lg.png",
      link: "",
      title: "Dynamic 365"
    },
    {
      position: 5,
      id: 5,
      urlToImage: "assets/images/home/things-we-do/transformation-lg.png",
      link: "",
      title: "Transformation"
    },
  ];
}

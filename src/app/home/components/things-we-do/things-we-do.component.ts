import { Component, Input } from '@angular/core';
import { Service } from '../../../core/constants/home.interface';

@Component({
  selector: 'app-things-we-do',
  standalone: false,
  templateUrl: './things-we-do.component.html',
  styleUrl: './things-we-do.component.scss'
})
export class ThingsWeDoComponent {
  @Input() services: Service[] = [];
}

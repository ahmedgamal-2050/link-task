import { Component, Input } from '@angular/core';
import { Service } from '../../constants/home.interface';

@Component({
  selector: 'app-service-card-item',
  templateUrl: './service-card-item.component.html',
  styleUrl: './service-card-item.component.scss'
})
export class ServiceCardItemComponent {
  @Input() service!: Service;
}

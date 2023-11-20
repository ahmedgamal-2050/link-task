import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Service } from '../../constants/home.interface';

@Component({
  selector: 'app-service-card-item',
  templateUrl: './service-card-item.component.html',
  styleUrl: './service-card-item.component.scss'
})
export class ServiceCardItemComponent implements OnChanges {
  @Input() service!: Service;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes && changes['service']) {
      this.service = changes['service'].currentValue;
    }
  }
}

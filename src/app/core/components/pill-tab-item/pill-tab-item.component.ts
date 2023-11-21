import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NewsCategory } from '../../constants/home.interface';

@Component({
  selector: 'app-pill-tab-item',
  templateUrl: './pill-tab-item.component.html',
  styleUrl: './pill-tab-item.component.scss'
})
export class PillTabItemComponent {
  @Input() newsCategory: NewsCategory | null = null;
  @Input() activeCategory: number = -1;
  @Output() filterNews = new EventEmitter<number>();

  filterNewsByCategory(categoryId: number) {
    this.filterNews.emit(categoryId);
  }
}

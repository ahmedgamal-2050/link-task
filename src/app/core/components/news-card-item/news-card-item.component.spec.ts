import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCardItemComponent } from './news-card-item.component';

describe('NewsCardItemComponent', () => {
  let component: NewsCardItemComponent;
  let fixture: ComponentFixture<NewsCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

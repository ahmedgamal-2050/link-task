import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PillTabItemComponent } from './pill-tab-item.component';

describe('PillTabItemComponent', () => {
  let component: PillTabItemComponent;
  let fixture: ComponentFixture<PillTabItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PillTabItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PillTabItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

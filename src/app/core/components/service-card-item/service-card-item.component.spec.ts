import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCardItemComponent } from './service-card-item.component';

describe('ServiceCardItemComponent', () => {
  let component: ServiceCardItemComponent;
  let fixture: ComponentFixture<ServiceCardItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceCardItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceCardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

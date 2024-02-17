import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliyoHeaderComponent } from './portfoliyo-header.component';

describe('PortfoliyoHeaderComponent', () => {
  let component: PortfoliyoHeaderComponent;
  let fixture: ComponentFixture<PortfoliyoHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliyoHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfoliyoHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

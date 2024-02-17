import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfoliyoComponent } from './portfoliyo.component';

describe('PortfoliyoComponent', () => {
  let component: PortfoliyoComponent;
  let fixture: ComponentFixture<PortfoliyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfoliyoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PortfoliyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

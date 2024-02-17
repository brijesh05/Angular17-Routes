import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgaHeaderComponent } from './tga-header.component';

describe('TgaHeaderComponent', () => {
  let component: TgaHeaderComponent;
  let fixture: ComponentFixture<TgaHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgaHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TgaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

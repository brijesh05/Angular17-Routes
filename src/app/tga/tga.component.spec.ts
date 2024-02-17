import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TgaComponent } from './tga.component';

describe('TgaComponent', () => {
  let component: TgaComponent;
  let fixture: ComponentFixture<TgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TgaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

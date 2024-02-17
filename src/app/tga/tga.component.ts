import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TgaHeaderComponent } from './tga-header/tga-header.component';
@Component({
  selector: 'app-tga',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatTabsModule,TgaHeaderComponent],
  templateUrl: './tga.component.html',
  styleUrl: './tga.component.scss'
})
export class TgaComponent {

  links:string[]=['details','data'];
  activeLink:string=this.links[0];
}

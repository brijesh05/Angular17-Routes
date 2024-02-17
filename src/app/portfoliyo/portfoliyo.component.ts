import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { PortfoliyoHeaderComponent } from './portfoliyo-header/portfoliyo-header.component';


@Component({
  selector: 'app-portfoliyo',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatTabsModule,PortfoliyoHeaderComponent],
  templateUrl: './portfoliyo.component.html',
  styleUrl: './portfoliyo.component.scss'
})
export class PortfoliyoComponent {
  links:string[]=['details','data'];
  activeLink:string=this.links[0];

}

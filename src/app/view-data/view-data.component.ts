import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
@Component({
  selector: 'app-view-data',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatTabsModule],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.scss'
})
export class ViewDataComponent {

  links:string[]=['tga','portfoliyo','history'];
  activeLink:string=this.links[0];
}

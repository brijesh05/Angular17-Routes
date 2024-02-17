import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HistoryHeaderComponent } from './history-header/history-header.component';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [RouterOutlet,RouterLink,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatTabsModule,HistoryHeaderComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  links:string[]=['details','data'];
  activeLink:string=this.links[0];
}

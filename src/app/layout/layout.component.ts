import { Component, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';
import { MatNavList, MatListItem,MatListItemIcon,MatListItemTitle, MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'
export interface Test {
  name: string,
  // isActive: boolean,
  path: string
}
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule,
    MatSidenav, MatSidenavContainer, MatSidenavContent,
     MatNavList,MatListModule,MatListItemIcon,MatListItemTitle, 
     CommonModule, MatListItem, RouterLink,RouterLinkActive,MatProgressSpinnerModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  isSpinnerEnabled:boolean=false;
  list: any[] = [
    {name: 'Test', path: ''},
    { name: 'Test1', path: 'view/23' }];
}

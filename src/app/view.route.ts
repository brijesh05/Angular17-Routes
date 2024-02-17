import { Routes } from '@angular/router';
import { ViewDataComponent } from './view-data/view-data.component';
import { TgaComponent } from './tga/tga.component';
import { PortfoliyoComponent } from './portfoliyo/portfoliyo.component';
import { HistoryComponent } from './history/history.component';
import { DetailComponent } from './tga/detail/detail.component';
import { DataComponent } from './tga/data/data.component';

export const routesView: Routes = [
  {
    path: ':id', component: ViewDataComponent,
    children: [
      { path: '', redirectTo: 'tga', pathMatch: 'full' },
      {
        path: 'tga', component: TgaComponent,
        children: [
          { path: '', redirectTo: "details", pathMatch: 'full' },
          { path: 'details', component: DetailComponent },
          { path: 'data', component: DataComponent }
        ]
      },
      {
        path: 'portfoliyo', component: PortfoliyoComponent,
        children: [
          { path: '', redirectTo: "details", pathMatch: 'full' },
          { path: 'details', component: DetailComponent },
          { path: 'data', component: DataComponent }
        ]
      },
      {
        path: 'history', component: HistoryComponent,

        children: [
          { path: '', redirectTo: "details", pathMatch: 'full' },
          { path: 'details', component: DetailComponent },
          { path: 'data', component: DataComponent }]
      }
    ]
  }
];


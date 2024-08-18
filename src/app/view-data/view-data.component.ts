import { Component, computed, effect, inject, Inject, Input, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { DataServiceService } from '../data-service.service';
import { DataViewTest } from '../data-view-test';
import { DataClass } from '../data-class';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-view-data',
  standalone: true,
  imports: [RouterOutlet,CommonModule,RouterLink,MatCard,MatCardContent,MatCardHeader,MatCardTitle,MatTabsModule,MatGridListModule],
  templateUrl: './view-data.component.html',
  styleUrl: './view-data.component.scss'
})
export class ViewDataComponent {

  links:string[]=['tga','portfoliyo','history'];
  activeLink:string=this.links[0];
  dataSerice=inject(DataServiceService)
  data=this.dataSerice.readOnlyData();
  @Input()
  set id(id:string){
      console.log(id);
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    

  }

  @Input()
  set dataId(dataId:string){
      console.log(dataId);
  }


 


}

import { computed, Injectable, signal } from '@angular/core';
import { DataClass } from './data-class';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private data=new DataClass();
  private testSignal=signal<DataClass>(this.data)
  constructor() { }

  updateValue(data:any){
    let dataView=this.data.dataView;
    dataView=data
    this.testSignal.update(x=>({...x,dataView}));
  }

  set() {
    this.testSignal.set({dataView:{var1:'test',var2:'test2',var3:'test3',var4:'test4'}})
  }

  readOnlyData(){
    return this.testSignal.asReadonly();
  }

}

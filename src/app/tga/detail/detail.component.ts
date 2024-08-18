import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import {  FormControl, FormControlState, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { DataServiceService } from '../../data-service.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection:ChangeDetectionStrategy.Default
})
export class DetailComponent {
  formValueSub!:Subscription;
  form!:FormGroup;
  val!:boolean;
  dataSerive=inject(DataServiceService)
  element!:ElementRef<HTMLElement>
  constructor(element:ElementRef<HTMLElement>){
    this.element=element;
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class. 
  this.form=new FormGroup({
    var1:new FormControl({value:'',disabled:false},{validators:[Validators.email]}),
    var2:new FormControl({value:'',disabled:false},{validators:[Validators.required]}),
    var3:new FormControl({value:'',disabled:false},{validators:[Validators.required]}),
    var4:new FormControl({value:'',disabled:false})
  });
  
  
  
}
  markReadOnly(...field:{arg0: string, arg1: boolean}[]) {
    field.forEach(e => {
      const custom= this.element.nativeElement.querySelector(`[ng-reflect-name=${e.arg0}]`);
      if(custom && e.arg1){
        custom.setAttribute('readonly','true');
      }else if(custom && !e.arg1){
        custom.removeAttribute('readonly');
      } 
    });

 
  }

  serverSideError(){
    if(this.form.valid){
    this.form.get('var1')?.markAsUntouched();
    this.form.get('var1')?.setErrors({server:true});
    }
    this.dataSerive.set();
  }

trigger(b:boolean){
  this.markReadOnly({arg0:'var1',arg1:b});
}

handle(y:boolean,x: any): void {
  console.info(y);
  this.dataSerive.updateValue(this.form.value);

  
 }

 ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.formValueSub=this.form.
  statusChanges.
  subscribe((x)=>{
      if('VALID'===x){
        this.handle('VALID'===x,this.form.value);
      }
  });
  
 }

 ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.formValueSub.unsubscribe();
 }
}

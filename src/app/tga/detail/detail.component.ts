import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  formValueSub!:Subscription;
  form!:FormGroup;
  val!:boolean;
  element!:ElementRef<HTMLElement>
  constructor(element:ElementRef<HTMLElement>){
    this.element=element;
  }

ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class. 
  this.form=new FormGroup({
    name:new FormControl({value:'',disabled:false},{validators:[Validators.email],updateOn:'change'})

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
    this.form.get('name')?.markAsUntouched();
    this.form.get('name')?.setErrors({server:true});
    }
  }

trigger(b:boolean){
  this.markReadOnly({arg0:'name',arg1:b});
}

handle(x: any): void {
  this.form.valid;
  if(this.form.valid){
    console.info(x);
  }
  
 }

 ngAfterViewInit(): void {
  //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  //Add 'implements AfterViewInit' to the class.
  this.formValueSub=this.form.valueChanges.subscribe(x=>this.handle(x));
  
 }

 ngOnDestroy(): void {
  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  this.formValueSub.unsubscribe();
 }
}

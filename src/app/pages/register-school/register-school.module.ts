import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterSchoolComponent } from './register-school.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';




@NgModule({
  declarations: [ RegisterSchoolComponent ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
  ],
  exports: [
    RegisterSchoolComponent
  ]
})
export class RegisterSchoolModule { }

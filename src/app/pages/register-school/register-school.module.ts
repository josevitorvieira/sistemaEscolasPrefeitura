import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterSchoolComponent } from './register-school.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputMaskModule} from 'primeng/inputmask';


@NgModule({
  declarations: [ RegisterSchoolComponent ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    FormsModule,
    ButtonModule,
    InputMaskModule,
    ReactiveFormsModule
  ],
  exports: [
    RegisterSchoolComponent
  ]
})
export class RegisterSchoolModule { }

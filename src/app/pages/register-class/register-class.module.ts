import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterClassComponent } from './register-class.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    RegisterClassComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule
  ]
})
export class RegisterClassModule { }

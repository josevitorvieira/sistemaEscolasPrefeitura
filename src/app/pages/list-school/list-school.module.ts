import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListSchoolComponent } from './list-school.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [
    ListSchoolComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    ListSchoolComponent
  ]
})
export class ListSchoolModule { }

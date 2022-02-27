import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';

import { ListClassComponent } from './list-class.component';


@NgModule({
  declarations: [
    ListClassComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ]
})
export class ListClassModule { }

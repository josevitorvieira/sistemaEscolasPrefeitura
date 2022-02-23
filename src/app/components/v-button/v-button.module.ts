import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VButtonComponent } from './v-button.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [
    VButtonComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    VButtonComponent
  ]
})
export class VButtonModule { }

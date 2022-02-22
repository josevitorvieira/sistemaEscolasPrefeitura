import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { VButtonModule } from 'src/app/components/v-button/v-button.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VButtonModule,
  ]
})
export class HomeModule { }

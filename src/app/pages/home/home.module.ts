import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {InputTextModule} from 'primeng/inputtext';
import {TableModule} from 'primeng/table';

// import { VButtonModule } from 'src/app/components/v-button/v-button.module';
import { RegisterSchoolModule } from '../register-school/register-school.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    RegisterSchoolModule,
  ]
})
export class HomeModule { }

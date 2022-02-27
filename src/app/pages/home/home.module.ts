import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {MegaMenuModule} from 'primeng/megamenu';
import { RegisterSchoolModule } from '../register-school/register-school.module';
import { ListSchoolModule } from '../list-school/list-school.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    RegisterSchoolModule,
    MegaMenuModule,
    ListSchoolModule
  ]
})
export class HomeModule { }

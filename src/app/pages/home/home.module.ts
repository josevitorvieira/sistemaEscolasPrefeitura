import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
// import {InputTextModule} from 'primeng/inputtext';
// import {TableModule} from 'primeng/table';
import {MegaMenuModule} from 'primeng/megamenu';
import { RegisterSchoolModule } from '../register-school/register-school.module';
import { ListSchoolModule } from '../list-school/list-school.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    // InputTextModule,
    // TableModule,
    RegisterSchoolModule,
    MegaMenuModule,
    ListSchoolModule
  ]
})
export class HomeModule { }

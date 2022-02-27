import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './pages/home/home.module';
import { ListClassModule } from './pages/list-class/list-class.module';
import { ListSchoolModule } from './pages/list-school/list-school.module';
import { ListStudentModule } from './pages/list-student/list-student.module';
import { RegisterClassModule } from './pages/register-class/register-class.module';
import { RegisterSchoolModule } from './pages/register-school/register-school.module';
import { RegisterStudentModule } from './pages/register-student/register-student.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    RegisterSchoolModule,
    ListSchoolModule,
    RegisterClassModule,
    ListClassModule,
    RegisterStudentModule,
    ListStudentModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

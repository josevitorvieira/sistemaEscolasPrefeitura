import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListClassComponent } from './pages/list-class/list-class.component';
import { ListSchoolComponent } from './pages/list-school/list-school.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { RegisterClassModule } from './pages/register-class/register-class.module';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';
import { RegisterStudentModule } from './pages/register-student/register-student.module';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "registerScholl",
    component: RegisterSchoolComponent
  },
  {
    path: "listSchool",
    component: ListSchoolComponent
  },
  {
    path: "registerClass",
    component: RegisterClassModule
  },
  {
    path: "listClass",
    component: ListClassComponent
  },
  {
    path: "registerStudent",
    component: RegisterStudentModule
  },
  {
    path: "listStudent",
    component: ListStudentComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListClassComponent } from './pages/list-class/list-class.component';
import { ListSchoolComponent } from './pages/list-school/list-school.component';
import { RegisterClassComponent } from './pages/register-class/register-class.component';
import { RegisterClassModule } from './pages/register-class/register-class.module';
import { RegisterSchoolComponent } from './pages/register-school/register-school.component';

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
    path: "registerSchool",
    component: RegisterSchoolComponent
  },
  {
    path: "registerSchool/:id",
    component: RegisterSchoolComponent
  },
  {
    path: "listSchool",
    component: ListSchoolComponent
  },
  {
    path: "registerClass/:idSchool",
    component: RegisterClassComponent
  },
  {
    path: "listClass/:id",
    component: ListClassComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

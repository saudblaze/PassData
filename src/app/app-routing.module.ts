import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataTableExmapleComponent } from './Pages/data-table-exmaple/data-table-exmaple.component';
import { ChildComponent } from './Pages/InputDecorator/child/child.component';
import { ParentComponent } from './Pages/InputDecorator/parent/parent.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ObservableSubscribeComponent } from './Pages/observable-subscribe/observable-subscribe.component';
import { StudentComponent } from './Pages/OutputDecorator/student/student.component';
import { TeacherComponent } from './Pages/OutputDecorator/teacher/teacher.component';
import { Employee1Component } from './Pages/UsingService/employee1/employee1.component';
import { Employee2Component } from './Pages/UsingService/employee2/employee2.component';
import { BossComponent } from './Pages/ViewChildDecorator/boss/boss.component';

const routes: Routes = [
  {
  path:'',
  component: MainPageComponent
  },
  {
    path:'ParentComponent',
    component: ParentComponent
    },
    {
      path:'TeacherComponent',
      component: TeacherComponent
    },
    {
      path:'BossComponent',
      component: BossComponent
    },
    {
      path:'Employee1Component',
      component: Employee1Component
    },
    {
      path:'Employee2Component',
      component: Employee2Component
    },
    {
      path:'ObservableSubscribe',
      component: ObservableSubscribeComponent
    },
    {
      path:'DataTableExample',
      component: DataTableExmapleComponent
    }, 
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

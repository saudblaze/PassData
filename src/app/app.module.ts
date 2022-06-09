import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './Pages/InputDecorator/parent/parent.component';
import { ChildComponent } from './Pages/InputDecorator/child/child.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule  } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { TeacherComponent } from './Pages/OutputDecorator/teacher/teacher.component';
import { StudentComponent } from './Pages/OutputDecorator/student/student.component';
import { BossComponent } from './Pages/ViewChildDecorator/boss/boss.component';
import { EmployeeComponent } from './Pages/ViewChildDecorator/employee/employee.component';
import { Employee1Component } from './Pages/UsingService/employee1/employee1.component';
import { Employee2Component } from './Pages/UsingService/employee2/employee2.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MainPageComponent,
    TeacherComponent,
    StudentComponent,
    BossComponent,
    EmployeeComponent,
    Employee1Component,
    Employee2Component,    
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

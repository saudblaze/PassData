import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './Pages/InputDecorator/child/child.component';
import { ParentComponent } from './Pages/InputDecorator/parent/parent.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';

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
      path:'ChildComponent',
      component: ChildComponent
      },
      

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

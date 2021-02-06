import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourseComponent} from './course/course.component';
import {JoinnowComponent} from './joinnow/joinnow.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path: 'course', component: CourseComponent},
  {path: 'joinnow', component: JoinnowComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

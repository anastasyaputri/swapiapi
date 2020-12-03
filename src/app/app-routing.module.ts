import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PeopleComponent } from 'pages/character/people.component';
// import { MovieComponent } from './movie.component';

const routes: Routes = [
  // { 
  //   path: 'movie', 
  //   component: MovieComponent
  // },
  // { 
  //   path: 'people', 
  //   component: PeopleComponent 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

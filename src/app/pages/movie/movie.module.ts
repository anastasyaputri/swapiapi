import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieComponent } from './movie.component';

export const routes = [
  { path: '', component: MovieComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
  ],
  declarations: [
    MovieComponent
  ]
})
export class MovieModule { }
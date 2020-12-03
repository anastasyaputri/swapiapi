import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeopleComponent } from './people.component';

export const routes = [
  { path: '', component: PeopleComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
  ],
  declarations: [
    PeopleComponent
  ]
})
export class PeopleModule { }
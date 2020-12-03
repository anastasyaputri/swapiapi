import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeopleDetailsComponent } from './peopledetails.component';

export const routes = [
  { path: '', component: PeopleDetailsComponent, pathMatch: 'full'  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),  
  ],
  declarations: [
    PeopleDetailsComponent
  ]
})
export class PeopleDetailsModule { }
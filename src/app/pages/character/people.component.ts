import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from '../services/app.services';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  public peopleList = [];
  
    constructor(
      public appService: AppService) { }
    ngOnInit() {
      this.getPeopleList();
    }

    public getPeopleList(){
      this.appService.getAllPeople().subscribe((res : any[])=>{
        const response:any=res;
        this.peopleList = response.results;
      })
    }
}
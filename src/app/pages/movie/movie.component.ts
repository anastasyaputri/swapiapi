import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from '../services/app.services';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
  public movieList = [];

  constructor(
    public appService: AppService) { }

    ngOnInit() {
      this.getMovieList();
    }

    public getMovieList(){
      this.appService.getAllMovies().subscribe((res : any[])=>{
        const response:any=res;
        this.movieList = response.results;
      })
    }
}
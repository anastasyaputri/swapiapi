import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getAllMovies(){
    return this.http.get('https://swapi.dev/api/films'); 
  }

  getAllPeople(){
    return this.http.get('https://swapi.dev/api/peoples');
  }

}
 
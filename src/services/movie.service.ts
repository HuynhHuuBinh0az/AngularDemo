import { Injectable } from '@angular/core';
import { environment } from './../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Movie } from './../app/model/movie.class'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private API : string = environment.apiUrl;

  constructor(
    public Http : HttpClient
  ) { }

  getMovie(name?: string, id?: number): Observable<any>{
    let url: string;
    if(name){
      url = this.API+`findbyname?name=`+name;
    }
    if (id) {
      url = this.API+`findbyid?id=`+id;
    }
    else {
      url = this.API+`getall`;
    }
    return this.Http.get(url);
  }

  resetDB(): Observable<any>{
    let url = this.API+'resetDB';
    console.log(url);
    return this.Http.get(url);
  }

  addMovie(movie : Movie) : Observable<any>{
    let url : string = this.API+`add`;
    return this.Http.post(url, movie);
  }

  updateMovie(movie : Movie){
    let url : string = this.API+`update`;
    return this.Http.post(url, movie);
  }

  deleteMovie(movie : Movie){
    let url : string = this.API+`delete`;
    return this.Http.post(url, movie);
  }

  handleError(err){
    if (err.error instanceof Error) {
      console.log(`Client-side error: ${err.error.message}`);
    } else {
      console.log(`Sever-side error: ${err.status} - ${err.error}`);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie.class';
import { MovieService } from '../../../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  public movie: Movie = {
    "description": "",
    "duration": null,
    "id": null,
    "movieName": "",
    "status": "",
    "thumbUrl": ""
  };

  constructor(
    public movieService: MovieService,
    public routerService : Router
  ) { }

  ngOnInit(): void {
  }

  addMovie() {
    this.movieService.addMovie(this.movie).subscribe(data => {
      console.log(data);
      this.routerService.navigate(['/index']);
    }, error => {
      this.movieService.handleError(error);
    })
  }

}

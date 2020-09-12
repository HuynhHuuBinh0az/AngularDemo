import { Component, OnInit } from '@angular/core';
import { Movie } from '../../model/movie.class';
import { MovieService } from '../../../services/movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {

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
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
      let id : number = data.id;
      this.movieService.getMovie(null,id).subscribe(data => {
        this.movie = data.data;
      }, error => {
        this.movieService.handleError(error);
      })
    })
  }

  onUpdate(){
    this.movieService.updateMovie(this.movie).subscribe(data => {
      console.log(data);
      this.routerService.navigate(['/index']);
    }, error => {
      this.movieService.handleError(error);
    })
  }

}

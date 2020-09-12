import { Component, OnInit } from '@angular/core';
import { MovieService } from './../../services/movie.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public movies = [];
  public name : string;
  public id : number;

  constructor(
    public movieService : MovieService,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
      this.name = data['name'];
      this.id = data['id'];
      let reset : boolean = data.reset;
      if (reset) {
        this.movieService.resetDB().subscribe(data => {
          this.movies = data['data'];
          console.log(this.movies);
        }, error => {
          this.movieService.handleError(error);
        })
      } else {
        this.movieService.getMovie(this.name).subscribe(data => {
          this.movies = data['data'];
          console.log(this.movies);
        }, error => {
          this.movieService.handleError(error);
        })
      }
    })
  }
}

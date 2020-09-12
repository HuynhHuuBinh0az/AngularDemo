import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../model/movie.class'
import { Router } from '@angular/router';
import { MovieService } from '../../../services/movie.service'

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  @Input() movies = [];

  constructor(
    public routerService : Router,
    public movieService : MovieService
  ) { }

  ngOnInit(): void {
  }

  onUpdate(id){
    this.routerService.navigate(['/update'], { queryParams: {id: id} });
  }

  onDelete(id){
    this.routerService.navigate(['/delete'], { queryParams: {id: id} });
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../services//movie.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public name : string;

  constructor(
    public routerService : Router,
    public movieService : MovieService
  ) { }

  ngOnInit(): void {
  }

  find(){
    this.routerService.navigate(['/index/find'], { queryParams: { name: this.name} });
  }

  onReset(){
    if (confirm("Are you sure reset DB")) {
      this.routerService.navigate(['/index'], { queryParams: { reset: true} });
    }
  }

}

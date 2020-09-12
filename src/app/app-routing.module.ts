import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index/index.component';
import { ErrorComponent } from './error/error.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'index',
    pathMatch : 'full'
  },
  {
    path : 'index',
    component : IndexComponent
  },
  {
    path : 'index/find',
    component : IndexComponent
  },
  {
    path : 'add',
    component : AddMovieComponent
  },
  {
    path : 'update',
    component : UpdateMovieComponent
  },
  {
    path : 'delete',
    component : DeleteMovieComponent
  },
  {
    path : '**',
    component : ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

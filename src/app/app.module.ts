import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { MovieService } from './../services/movie.service'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { MovieListComponent } from './movie/movie-list/movie-list.component';
import { ErrorComponent } from './error/error.component';
import { AddMovieComponent } from './movie/add-movie/add-movie.component';
import { UpdateMovieComponent } from './movie/update-movie/update-movie.component';
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    MovieListComponent,
    ErrorComponent,
    AddMovieComponent,
    UpdateMovieComponent,
    DeleteMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }

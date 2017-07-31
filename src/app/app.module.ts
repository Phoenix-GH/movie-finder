import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';
import {CategoriesComponent} from './categories/categories.component';
import {FranchiseComponent} from './franchise/franchise.component';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
    CategoriesComponent,
    FranchiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    JsonpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

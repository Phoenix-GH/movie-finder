import { Component } from '@angular/core';
import { MovieService } from '../services/movie.service'

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  videoList: Array<Object>;
  firstVideo: string; 
  searchList: Array<Object>;
  searchStr: string;
  bannerList: Array<Object>;
  constructor(private _movieService: MovieService) {
      this._movieService.getVideoList().subscribe(res=> {
        /* Simple validation */
        var valid = res.replace('"{', '{');
        valid = valid.replace('}"', '}');
        this.videoList = JSON.parse(valid).ret.dat.content;
        var firstCategory = JSON.parse(valid).ret.dat.content[0];
        this.firstVideo = firstCategory[0]['f_url_poster_landscape'];
        this.getBanners();
      });
   }

   searchMovies(){
     this._movieService.searchMovies(this.searchStr).subscribe(res => {
       var valid = res.replace('"{', '{');
        valid = valid.replace('}"', '}');
       this.searchList = JSON.parse(valid).ret.dat['0'];
     });
   }

   getBanners(){
     this._movieService.getBanners().subscribe(res => {
       var valid = res.replace('"{', '{');
        valid = valid.replace('}"', '}');
       this.bannerList = JSON.parse(valid).ret.dat.data[0]['banners'];
     });
   }
}

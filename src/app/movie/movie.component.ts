import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {MovieService} from '../services/movie.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
    selector: 'movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit{
    private sanitizer;
    private safeURL;
    movie:Object;
    constructor(
        private router:ActivatedRoute, 
        private _movieService:MovieService,
        private _sanitizer: DomSanitizer){
        this.sanitizer = _sanitizer;
    }
    
    ngOnInit(){
        this.router.params.subscribe((params) => {
            let id = params['id'];
            this._movieService.getVideoDetails(id).subscribe(res => {
                var valid = res.replace('"{', '{');
                valid = valid.replace('}"', '}');
                console.log(valid);
                this.movie = JSON.parse(valid).ret.dat.video;
                this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("http://www.youtube.com/embed/"+this.movie['v_url_youtube_id']);
            });
           
        });
          
     }
    
}
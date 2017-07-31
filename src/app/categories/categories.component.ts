import { Component, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service'
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit{

  videoList: Array<Object>;
  private id:string;
  constructor(private router:ActivatedRoute, private _movieService: MovieService)  {
      
   }
  ngOnInit(){
        this.router.params.subscribe((params) => {
           this.id = params['id'];
           this._movieService.getByCategory(this.id).subscribe(res=> {
              /* Simple validation */
              var valid = res.replace('"{', '{');
              valid = valid.replace('}"', '}');
              this.videoList = JSON.parse(valid).ret.dat.data;

              console.log(JSON.stringify(this.videoList[0]));
           
            });
        });
          
     }
}

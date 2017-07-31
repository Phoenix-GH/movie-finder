import { Component, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service'
import {Router, ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-movies',
  templateUrl: './franchise.component.html',
  styleUrls: ['./franchise.component.css']
})
export class FranchiseComponent implements OnInit{

  videoList: Array<Object>;
  private id:string;
  constructor(private router:ActivatedRoute, private _movieService: MovieService)  {
      
   }
  ngOnInit(){
        this.router.params.subscribe((params) => {
           this.id = params['id'];
           this._movieService.getFrenchise(this.id).subscribe(res=> {
              /* Simple validation */
              var valid = res.replace('"{', '{');
              valid = valid.replace('}"', '}');
              this.videoList = JSON.parse(valid).ret.dat.data;

              console.log(JSON.stringify(this.videoList));
           
            });
        });
          
     }
}

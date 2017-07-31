import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey: string;
  postItem: string;
  constructor(private http: Http) { 
    this.apiKey = '201701091029384756';
    console.log('movie service initialized...');
  }

  getVideoList(){
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "aps": "www.nonton.com",
      "apv": "2.0.0",
      "ip": "103.227.145.66",
      "uid": "1",
      "fid": "",
      "did": ""
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_get_initial_data');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }
  getByCategory(id:string){
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "sid": "22",
      "lim": 0,
      "fid": 0,
      "cat": id
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_get_video_list');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }

  getVideoDetails(id:string){
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "activityId": "0",
      "videoId": id,
      "duration": 100,
      "nShares": 0,
      "resolution": "",
      "lastSecond": 0,
      "uid": "52",
      "sid": "1"
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_get_video_details');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }

  searchMovies(key:string){
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "sid": "22",
      "kwd": key,
      "pg": 0
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_search_database');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }

  getFrenchise(key:string){
    
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "sid": "22",
      "lim": 0,
      "fid": key
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_get_franchise_video');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }
  getBanners()
  {
    let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    let options = new RequestOptions({ headers: headers });
    let body = new URLSearchParams();
    var data = {
      "sid": "22"
    };
    body.set('api_key', this.apiKey);
    body.set('action', 'cli_get_home_banner');
    body.set('data',JSON.stringify(data));
    body.set('noencryption',"1");
    
    return this.http.post('http://new.nonton.com/branch/index_nontondb.php', body.toString(), options)
            .map(res => res.text());     
  }
}

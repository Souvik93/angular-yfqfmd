import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {

  constructor(private http: HttpClient) { }

    getMovies() {
    return this.http.get('./assets/my-fav.json');
  }

}
import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import { AppService } from './app.service';
import { Store , select } from '@ngrx/store';
import { MovieState } from './app.state';
import { GetMovieDetails } from './app.actions';
import { selectMoviesList } from './app.selector'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  myMovies: any = [];
  isRandomClicked = false;
  intervalDetails: any;
  config$: any;

  constructor(private appService: AppService , private store: Store<MovieState>) {
    this.getDataFromJSON();
    this.store.dispatch(new GetMovieDetails());
    this.config$ = this.store.pipe(select(selectMoviesList));
    this.config$.subscribe(response => {
      console.log('Hey There !! From Store Subscriber.');
      console.log(response);
    })
  }
  name = 'Angular';

    onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}, i:number) {
    
    this.myMovies[i].ratings = $event.newValue;
    this.myMovies.sort((a,b) => a.ratings-b.ratings);
  
  }

  getDataFromJSON() {
    this.appService.getMovies().subscribe(res => {
      this.myMovies = res;
    });
  }

  onRandom(): void {
    this.isRandomClicked = !this.isRandomClicked;
    
    if (this.isRandomClicked) {
     this.intervalDetails = setInterval(() => {
           console.log('Interval Start');
           this.randomlyRate();
       }, this.randomIntFromInterval(1000,5000));
    } else {
      console.log('Interval Stop');
      // console.log(clearInterval(varConst));
      clearInterval(this.intervalDetails);
    } 
  }

  randomlyRate(): void {
    this.myMovies[this.randomIntFromInterval(0,this.myMovies.length - 1)].ratings = this.randomIntFromInterval(1,5);
    this.myMovies.sort((a,b) => a.ratings-b.ratings);
  }

   randomIntFromInterval(min,max): number // min and max included
{
    return Math.floor(Math.random()*(max-min+1)+min);
}



}

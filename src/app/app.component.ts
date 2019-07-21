import { Component } from '@angular/core';
import { StarRatingComponent } from 'ng-starrating';
import {AppService} from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  myMovies: any = [];
  isRandomClicked = false;
  intervalDetails: any;

  constructor(private appService: AppService) {
    this.getDataFromJSON();
  }
  name = 'Angular';

    onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}, i:number) {
     alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
    this.myMovies[i].ratings = $event.newValue;
    this.myMovies.sort((a,b) => a.ratings-b.ratings);
    console.log('Hey There !! From onRate');
    console.log(this.myMovies);
  }

  getDataFromJSON() {
    this.appService.getMovies().subscribe(res => {
      console.log('Hey There!! From getDataJSON Service');
      console.log(res);
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

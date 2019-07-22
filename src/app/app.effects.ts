import { Injectable } from '@angular/core';
import { Effect , Actions , ofType } from '@ngrx/effects';
import { Store , select } from '@ngrx/store';
import { AppService } from './app.service';
import { MovieState } from './app.state';
import { GetMovieDetails , GetMovieDetailsSuccess , MovieDetailsActions } from './app.actions';
import { of } from 'rxjs';
import { switchMap  } from 'rxjs/operators';

@Injectable()
export class MoviesEffects  {
  @Effect()
  getMovirs$ = this.action.pipe(
    ofType<GetMovieDetails>(MovieDetailsActions.GetMovieDetails),
    switchMap(()=> new GetMovieDetailsSuccess(this.appService.getMovies()) )
  );

  constructor(private appService: AppService, private action: Actions, private store: Store<MovieState> ) {

  }
}
import { Injectable } from '@angular/core';
import { Effect , Actions , ofType } from '@ngrx/effects';
import { Store , select } from '@ngrx/store';
import { AppService } from './app.service';
import { MovieState } from './app.state';
import { GetMovieDetails , GetMovieDetailsSuccess } from './app.actions';

@Injectable()
export class AppEffects {
  @Effect()
  getMovirs$ = this.action.pipe(
    ofType<GetMovieDetails>()
  )

  constructor(private appService: AppService, private action: Actions, private store: Store<MovieState> ) {

  }
}
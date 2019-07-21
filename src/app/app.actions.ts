import { Action } from '@ngrx/store';
import { MovieDetails } from './movie-details';
export enum MovieDetailsActions {
GetMovieDetails = "[Movies] Get Movie Details",
GetMovieDetailsSuccess = "[Movies] Get Movie Details Success",
}

export class GetMovieDetails implements Action {
  public readonly type = MovieDetailsActions.GetMovieDetails;
}

export class GetMovieDetailsSuccess implements Action {
  public readonly type = MovieDetailsActions.GetMovieDetailsSuccess;
  constructor(payload: MovieDetails[]) {}
}

export type MovieActions = GetMovieDetails | GetMovieDetailsSuccess;
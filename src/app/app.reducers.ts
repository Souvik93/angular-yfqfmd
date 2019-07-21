import { MovieDetailsActions , MovieActions } from './app.actions';
import { initialMovieState , MovieState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
export const movieDetailsReducer = (
  state = initialMovieState,
  action: MovieActions
): MovieState => {
  switch(action.type) {
    case MovieDetailsActions.GetMovieDetailsSuccess: {
    return  { ...state,
      movies: action.payload
    };
    }
    default: {
      return state;
    }
  }
}
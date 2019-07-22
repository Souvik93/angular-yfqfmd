import { createSelector } from '@ngrx/store';
import { MovieState } from './app.state';
const selectMovies = (state: MovieState ) => state.movies;
export const selectMoviesList = createSelector(selectMovies,(state: MovieState) => state.user);
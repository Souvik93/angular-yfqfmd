import {MovieDetails} from './movie-details';

export interface MovieState {
  movies: MovieDetails[];
}
export const initialMovieState: MovieState = {
  movies: null
};

export function getInitialState(): MovieState {
  return initialMovieState;
} 
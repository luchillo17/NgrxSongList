import { Action } from '@ngrx/store';
import { FavoritesActions, FavoritesActionTypes } from './favorites.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: FavoritesActions): State {
  switch (action.type) {

    case FavoritesActionTypes.FavoritesAction:
      return state;


    default:
      return state;
  }
}

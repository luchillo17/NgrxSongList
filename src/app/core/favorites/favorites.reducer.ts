import { Action } from '@ngrx/store';
import { uniq } from 'lodash';
import { FavoritesActions, FavoritesActionTypes } from './favorites.actions';

export interface State {
  favorites: string[];
}

export const initialState: string[] = [ '5' ];

export function reducer(state = initialState, action: FavoritesActions): string[] {
  switch (action.type) {

    case FavoritesActionTypes.Add:
      return uniq([
        ...state,
        action.favoriteId,
      ]);

    case FavoritesActionTypes.Remove:
      return state
        .filter(id => id !== action.favoriteId);

    default:
      return state;
  }
}

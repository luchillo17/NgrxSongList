import { Action } from '@ngrx/store';

export enum FavoritesActionTypes {
  FavoritesAction = '[Favorites] Action'
}

export class Favorites implements Action {
  readonly type = FavoritesActionTypes.FavoritesAction;
}

export type FavoritesActions = Favorites;

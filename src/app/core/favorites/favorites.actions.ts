import { Action } from '@ngrx/store';

export enum FavoritesActionTypes {
  Add = '[Favorites] Add',
  Remove = '[Favorites] Remove',
}

export class AddFavorites implements Action {
  readonly type = FavoritesActionTypes.Add;
  constructor(public favoriteId: string) {}
}

export class RemoveFavorites implements Action {
  readonly type = FavoritesActionTypes.Remove;
  constructor(public favoriteId: string) {}
}

export type FavoritesActions =
  AddFavorites |
  RemoveFavorites;

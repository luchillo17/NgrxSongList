import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FavoritesActions, FavoritesActionTypes } from './favorites.actions';

@Injectable()
export class FavoritesEffects {

  @Effect()
  effect$ = this.actions$.ofType(FavoritesActionTypes.Add);

  constructor(private actions$: Actions) {}
}

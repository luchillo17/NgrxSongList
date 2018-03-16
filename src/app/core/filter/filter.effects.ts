import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { FilterActions, FilterActionTypes } from './filter.actions';

@Injectable()
export class FilterEffects {

  @Effect()
  effect$ = this.actions$.ofType(FilterActionTypes.Update);

  constructor(private actions$: Actions) {}
}

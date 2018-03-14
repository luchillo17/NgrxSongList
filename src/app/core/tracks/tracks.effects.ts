import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { TracksActions, TracksActionTypes } from './tracks.actions';

@Injectable()
export class TracksEffects {

  @Effect()
  effect$ = this.actions$.ofType(TracksActionTypes.TracksAction);

  constructor(private actions$: Actions) {}
}

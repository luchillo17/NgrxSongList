import { Action } from '@ngrx/store';
import { TracksActions, TracksActionTypes } from './tracks.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: TracksActions): State {
  switch (action.type) {

    case TracksActionTypes.TracksAction:
      return state;


    default:
      return state;
  }
}

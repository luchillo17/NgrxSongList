import { Action } from '@ngrx/store';
import { FilterActions, FilterActionTypes } from './filter.actions';

export interface State {

}

export const initialState: State = {

};

export function reducer(state = initialState, action: FilterActions): State {
  switch (action.type) {

    case FilterActionTypes.FilterAction:
      return state;


    default:
      return state;
  }
}

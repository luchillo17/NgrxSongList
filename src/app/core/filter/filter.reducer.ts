import { Action } from '@ngrx/store';
import { Filter, FilterByEnum } from './filter.interfaces';
import { FilterActionTypes, FilterActions } from './filter.actions';

export interface State {
  filter: Filter;
}

export const initialState: Filter = {
  filterBy: FilterByEnum.none,
  value: null,
};

export function reducer(state = initialState, action: FilterActions): Filter {
  switch (action.type) {

    case FilterActionTypes.Update:
      return action.filter;

    case FilterActionTypes.setValue:
      return {
        ...state,
        value: action.value,
      };

    case FilterActionTypes.setField:
      return {
        ...state,
        filterBy: action.filterBy,
      };

    default:
      return state;
  }
}

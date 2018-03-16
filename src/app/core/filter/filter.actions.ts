import { Action } from '@ngrx/store';
import { Filter } from './filter.interfaces';

export enum FilterActionTypes {
  Update = '[Filter] Update'
}

export class UpdateFilter implements Action {
  readonly type = FilterActionTypes.Update;
  constructor(public filter: Filter) {}
}

export type FilterActions = UpdateFilter;

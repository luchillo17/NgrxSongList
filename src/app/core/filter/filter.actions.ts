import { Action } from '@ngrx/store';

export enum FilterActionTypes {
  FilterAction = '[Filter] Action'
}

export class Filter implements Action {
  readonly type = FilterActionTypes.FilterAction;
}

export type FilterActions = Filter;

import { Action } from '@ngrx/store';
import { Filter, FilterByEnum } from './filter.interfaces';

export enum FilterActionTypes {
  Update = '[Filter] Update',
  setValue = '[Filter] Set Value',
  setField = '[Filter] Set Field',
}

export class UpdateFilter implements Action {
  readonly type = FilterActionTypes.Update;
  constructor(public filter: Filter) {}
}

export class SetFilterValue implements Action {
  readonly type = FilterActionTypes.setValue;
  constructor(public value: string) {}
}

export class SetFilterField implements Action {
  readonly type = FilterActionTypes.setField;
  constructor(public filterBy: FilterByEnum) {}
}

export type FilterActions =
  UpdateFilter |
  SetFilterValue |
  SetFilterField;

import { createFeatureSelector } from '@ngrx/store';
import { Filter } from './filter.interfaces';

export const filterSelector = createFeatureSelector<Filter>('filter');

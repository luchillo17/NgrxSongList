import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTracks from './tracks/tracks.reducer';
import * as fromFilter from './filter/filter.reducer';
import * as fromFavorites from './favorites/favorites.reducer';

export interface State extends
  fromTracks.State,
  fromFilter.State,
  fromFavorites.State {}

export const reducers: ActionReducerMap<State> = {

};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

import { createSelector, createFeatureSelector } from '@ngrx/store';
import { tracksSelector } from '../tracks/tracks.selectors';

export const favoritesSelector = createFeatureSelector<string[]>('favorites');

export const favoritesTracksSelector = createSelector(
  tracksSelector,
  favoritesSelector,
  (tracks, favorites) => tracks.filter((track) => favorites.includes(track.id))
);

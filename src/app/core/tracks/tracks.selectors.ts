import { createSelector, createFeatureSelector } from '@ngrx/store';
import { filterSelector } from '../filter/filter.selectors';
import { FilterByEnum } from '../filter/filter.interfaces';

export const tracksSelector = createFeatureSelector<Track[]>('tracks');

export const filteredTracksSelector = createSelector(
  tracksSelector,
  filterSelector,
  (tracks, filter) => tracks.filter((track) => {
    if (filter.filterBy === FilterByEnum.none) {
      return tracks;
    }

    let filterField: string;
    switch (filter.filterBy) {
      case FilterByEnum.url:
        filterField = 'url';
        break;

      default:
        filterField = 'name';
        break;
    }
    return track[ filterField ].toLowerCase().includes(filter.value.toLowerCase());
  })
);

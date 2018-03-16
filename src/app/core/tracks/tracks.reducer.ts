import { Action } from '@ngrx/store';
import { TracksActions, TracksActionTypes } from './tracks.actions';

export interface State {
  tracks: Track[];
}

export const initialState: Track[] = [ {
  id: '1',
  url: 'https://www.youtube.com/watch?v=aAF5k9oIX0g',
  name: 'Programming Music Mix for Dark Minds 2016',
}, {
  id: '5',
  url: 'https://www.youtube.com/watch?v=EBuhQWpcyTQ',
  name: 'Programming Music Mix for Dark Minds 2017',
}, {
  id: '8',
  url: 'https://www.youtube.com/watch?v=6dkqVj7heiA',
  name: 'Programming Music Mix for Dark Minds',
} ];

export function reducer(state = initialState, action: TracksActions): Track[] {
  switch (action.type) {

    case TracksActionTypes.TracksAction:
      return state;


    default:
      return state;
  }
}

import { Action } from '@ngrx/store';

export enum TracksActionTypes {
  TracksAction = '[Tracks] Action'
}

export class Tracks implements Action {
  readonly type = TracksActionTypes.TracksAction;
}

export type TracksActions = Tracks;

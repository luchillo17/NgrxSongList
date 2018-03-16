import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { filteredTracksSelector } from '../core/tracks/tracks.selectors';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent {

  public tracks$: Observable<Track[]>;

  constructor(private store: Store<any>) {
    this.tracks$ = this.store.pipe(
      select(filteredTracksSelector),
    );
  }
}

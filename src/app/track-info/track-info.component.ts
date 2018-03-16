import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { Store } from '@ngrx/store';
import { AddFavorites, RemoveFavorites } from '../core/favorites/favorites.actions';

@Component({
  selector: 'app-track-info',
  templateUrl: './track-info.component.html',
  styleUrls: ['./track-info.component.scss']
})
export class TrackInfoComponent {
  @Input()
  track: Track;

  @Input()
  inFavorites = false;

  constructor(private store: Store<any>) { }

  toggleFavorite() {
    if (this.inFavorites) {
      this.store.dispatch(new RemoveFavorites(this.track.id));
    } else {
      this.store.dispatch(new AddFavorites(this.track.id));
    }
  }
}

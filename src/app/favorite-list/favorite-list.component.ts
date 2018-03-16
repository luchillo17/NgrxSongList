import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { favoritesTracksSelector } from '../core/favorites/favorites.selectors';

@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrls: ['./favorite-list.component.scss']
})
export class FavoriteListComponent {

  public favoriteTracks$: Observable<Track[]>;

  constructor(private store: Store<any>) {
    this.favoriteTracks$ = this.store.pipe(
      select(favoritesTracksSelector),
    );
  }
}

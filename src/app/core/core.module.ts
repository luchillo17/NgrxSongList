import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers, metaReducers } from '.';
import { environment } from '../../environments/environment';
import * as fromTracks from './tracks/tracks.reducer';
import { TracksEffects } from './tracks/tracks.effects';
import * as fromFavorites from './favorites/favorites.reducer';
import { FavoritesEffects } from './favorites/favorites.effects';
import * as fromFilter from './filter/filter.reducer';
import { FilterEffects } from './filter/filter.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreModule.forFeature('tracks', fromTracks.reducer),
    StoreModule.forFeature('filter', fromFilter.reducer),
    StoreModule.forFeature('favorites', fromFavorites.reducer),
    EffectsModule.forFeature([TracksEffects, FavoritesEffects, FilterEffects]),
  ],
  declarations: []
})
export class CoreModule { }

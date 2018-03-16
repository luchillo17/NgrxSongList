import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatCardModule,
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TrackListComponent } from './track-list/track-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FormsModule } from '@angular/forms';
import { TrackInfoComponent } from './track-info/track-info.component';


@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    FavoriteListComponent,
    FilterFormComponent,
    TrackInfoComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,

    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

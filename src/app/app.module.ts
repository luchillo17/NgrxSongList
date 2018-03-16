import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule,
  MatSelectModule,
  MatCardModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TrackListComponent } from './track-list/track-list.component';
import { FavoriteListComponent } from './favorite-list/favorite-list.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TrackListComponent,
    FavoriteListComponent,
    FilterFormComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,

    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

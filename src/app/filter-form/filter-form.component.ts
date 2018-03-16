import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';

import { State } from '../core';
import { filterOptions, Filter } from '../core/filter/filter.interfaces';
import { filterSelector } from '../core/filter/filter.selectors';
import { SetFilterField, SetFilterValue } from '../core/filter/filter.actions';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.scss']
})
export class FilterFormComponent {

  public debounceValueEmitter: Subject<string> = new Subject();

  public filter$: Observable<Filter>;
  public filterOptions = filterOptions;

  constructor(private store: Store<State>) {
    this.filter$ = this.store.pipe(
      select(filterSelector)
    );

    this.debounceValueEmitter.pipe(
      debounceTime(300)
    ).subscribe((value) => this.store
      .dispatch(new SetFilterValue(value))
    );
  }

  setFilterValue(event: Event) {
    const { value } = (event.target as HTMLInputElement);
    this.store.dispatch(new SetFilterValue(value));
  }

  setFilterField(selectedField: number) {
    this.store.dispatch(new SetFilterField(selectedField));
  }
}

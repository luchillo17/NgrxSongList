import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { TracksEffects } from './tracks.effects';

describe('TracksService', () => {
  let actions$: Observable<any>;
  let effects: TracksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TracksEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(TracksEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

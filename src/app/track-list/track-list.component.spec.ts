import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListComponent } from './track-list.component';
import { Store, StoreModule } from '@ngrx/store';

describe('TrackListComponent', () => {
  let component: TrackListComponent;
  let fixture: ComponentFixture<TrackListComponent>;
  let store: Store<any>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      imports: [ StoreModule.forRoot({}) ],
      declarations: [ TrackListComponent ]
    });

    await TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);

    spyOn(store, 'dispatch').and.callThrough();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

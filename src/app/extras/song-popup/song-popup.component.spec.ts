import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPopupComponent } from './song-popup.component';

describe('SongPopupComponent', () => {
  let component: SongPopupComponent;
  let fixture: ComponentFixture<SongPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongPopupComponent]
    });
    fixture = TestBed.createComponent(SongPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

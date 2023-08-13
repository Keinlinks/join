import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAlbumComponent } from './top-album.component';

describe('TopAlbumComponent', () => {
  let component: TopAlbumComponent;
  let fixture: ComponentFixture<TopAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopAlbumComponent]
    });
    fixture = TestBed.createComponent(TopAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

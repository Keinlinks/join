import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAlbumComponent } from './bot-album.component';

describe('BotAlbumComponent', () => {
  let component: BotAlbumComponent;
  let fixture: ComponentFixture<BotAlbumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BotAlbumComponent]
    });
    fixture = TestBed.createComponent(BotAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumsMenuComponent } from './albums-menu.component';

describe('AlbumsMenuComponent', () => {
  let component: AlbumsMenuComponent;
  let fixture: ComponentFixture<AlbumsMenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumsMenuComponent]
    });
    fixture = TestBed.createComponent(AlbumsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

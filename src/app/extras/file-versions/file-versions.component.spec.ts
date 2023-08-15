import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileVersionsComponent } from './file-versions.component';

describe('FileVersionsComponent', () => {
  let component: FileVersionsComponent;
  let fixture: ComponentFixture<FileVersionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FileVersionsComponent]
    });
    fixture = TestBed.createComponent(FileVersionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

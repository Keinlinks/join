import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VersionFileComponent } from './version-file.component';

describe('VersionFileComponent', () => {
  let component: VersionFileComponent;
  let fixture: ComponentFixture<VersionFileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VersionFileComponent]
    });
    fixture = TestBed.createComponent(VersionFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbarComponent } from './addbar.component';

describe('AddbarComponent', () => {
  let component: AddbarComponent;
  let fixture: ComponentFixture<AddbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddbarComponent]
    });
    fixture = TestBed.createComponent(AddbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

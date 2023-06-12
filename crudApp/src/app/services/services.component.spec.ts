import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiesComponent } from './services.component';

describe('ServicesComponent', () => {
  let component: ServiesComponent;
  let fixture: ComponentFixture<ServiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServiesComponent]
    });
    fixture = TestBed.createComponent(ServiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
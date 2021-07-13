import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorldCovidDetailsComponent } from './world-covid-details.component';

describe('WorldCovidDetailsComponent', () => {
  let component: WorldCovidDetailsComponent;
  let fixture: ComponentFixture<WorldCovidDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorldCovidDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorldCovidDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthStoriesComponent } from './health-stories.component';

describe('HealthStoriesComponent', () => {
  let component: HealthStoriesComponent;
  let fixture: ComponentFixture<HealthStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubProfileWidgetComponent } from './github-profile-widget.component';

describe('GithubProfileWidgetComponent', () => {
  let component: GithubProfileWidgetComponent;
  let fixture: ComponentFixture<GithubProfileWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubProfileWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubProfileWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

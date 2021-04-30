import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginQuestionComponent } from './login-question.component';

describe('LoginQuestionComponent', () => {
  let component: LoginQuestionComponent;
  let fixture: ComponentFixture<LoginQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

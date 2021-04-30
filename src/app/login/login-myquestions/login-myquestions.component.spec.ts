import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMyquestionsComponent } from './login-myquestions.component';

describe('LoginMyquestionsComponent', () => {
  let component: LoginMyquestionsComponent;
  let fixture: ComponentFixture<LoginMyquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMyquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMyquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

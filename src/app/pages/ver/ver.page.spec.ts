import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerTodoPage } from './ver.page';

describe('VerTodoPage', () => {
  let component: VerTodoPage;
  let fixture: ComponentFixture<VerTodoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VertodoComponent } from './vertodo.component';

describe('VertodoComponent', () => {
  let component: VertodoComponent;
  let fixture: ComponentFixture<VertodoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [VertodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(VertodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

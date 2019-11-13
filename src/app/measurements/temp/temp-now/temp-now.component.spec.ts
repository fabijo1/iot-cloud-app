import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempNowComponent } from './temp-now.component';

describe('TempNowComponent', () => {
  let component: TempNowComponent;
  let fixture: ComponentFixture<TempNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

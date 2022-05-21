import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBackComponent } from './top-back.component';

describe('TopBackComponent', () => {
  let component: TopBackComponent;
  let fixture: ComponentFixture<TopBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

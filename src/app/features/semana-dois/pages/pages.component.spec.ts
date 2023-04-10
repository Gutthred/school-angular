import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremPageComponent } from './pages.component';

describe('PagesComponent', () => {
  let component: LoremPageComponent;
  let fixture: ComponentFixture<LoremPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoremPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

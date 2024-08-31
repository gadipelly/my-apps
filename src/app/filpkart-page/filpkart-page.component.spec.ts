import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilpkartPageComponent } from './filpkart-page.component';

describe('FilpkartPageComponent', () => {
  let component: FilpkartPageComponent;
  let fixture: ComponentFixture<FilpkartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilpkartPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilpkartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

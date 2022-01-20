import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicatasComponent } from './duplicatas.component';

describe('DuplicatasComponent', () => {
  let component: DuplicatasComponent;
  let fixture: ComponentFixture<DuplicatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuplicatasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

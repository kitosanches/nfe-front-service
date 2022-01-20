import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoXmlComponent } from './arquivo-xml.component';

describe('ArquivoXmlComponent', () => {
  let component: ArquivoXmlComponent;
  let fixture: ComponentFixture<ArquivoXmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArquivoXmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoXmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

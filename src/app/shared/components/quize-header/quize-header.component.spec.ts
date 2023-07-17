import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizeHeaderComponent } from './quize-header.component';

describe('QuizeHeaderComponent', () => {
  let component: QuizeHeaderComponent;
  let fixture: ComponentFixture<QuizeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuizeHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

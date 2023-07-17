import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScroeComponent } from './scroe.component';

describe('ScroeComponent', () => {
  let component: ScroeComponent;
  let fixture: ComponentFixture<ScroeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScroeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScroeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

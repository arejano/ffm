import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrakingComponent } from './traking.component';

describe('TrakingComponent', () => {
  let component: TrakingComponent;
  let fixture: ComponentFixture<TrakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrakingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandCircleComponent } from './hand-circle.component';
import { HandIconPipe } from './hand-icon.pipe';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HandCircleComponent', () => {
  let component: HandCircleComponent;
  let fixture: ComponentFixture<HandCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ NoopAnimationsModule ],
      declarations: [ HandCircleComponent, HandIconPipe ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

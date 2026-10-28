import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LearningGame } from './learning-game';

describe('LearningGame', () => {
  let component: LearningGame;
  let fixture: ComponentFixture<LearningGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningGame],
    }).compileComponents();

    fixture = TestBed.createComponent(LearningGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

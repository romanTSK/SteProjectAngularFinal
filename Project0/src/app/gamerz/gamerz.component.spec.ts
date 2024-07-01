import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerzComponent } from './gamerz.component';

describe('GamerzComponent', () => {
  let component: GamerzComponent;
  let fixture: ComponentFixture<GamerzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GamerzComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamerzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

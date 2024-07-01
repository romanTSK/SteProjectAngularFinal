import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBottomComponent } from './site-bottom.component';

describe('SiteBottomComponent', () => {
  let component: SiteBottomComponent;
  let fixture: ComponentFixture<SiteBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteBottomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

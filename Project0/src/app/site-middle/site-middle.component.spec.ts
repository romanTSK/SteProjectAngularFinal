import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteMiddleComponent } from './site-middle.component';

describe('SiteMiddleComponent', () => {
  let component: SiteMiddleComponent;
  let fixture: ComponentFixture<SiteMiddleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteMiddleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

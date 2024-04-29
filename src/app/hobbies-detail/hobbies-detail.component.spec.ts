import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbiesDetailComponent } from './hobbies-detail.component';

describe('HobbiesDetailComponent', () => {
  let component: HobbiesDetailComponent;
  let fixture: ComponentFixture<HobbiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbiesDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HobbiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

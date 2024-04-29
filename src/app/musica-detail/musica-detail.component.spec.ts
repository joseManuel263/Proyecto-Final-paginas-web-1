import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaDetailComponent } from './musica-detail.component';

describe('MusicaDetailComponent', () => {
  let component: MusicaDetailComponent;
  let fixture: ComponentFixture<MusicaDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicaDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

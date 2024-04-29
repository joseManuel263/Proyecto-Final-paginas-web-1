import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistasDetailComponent } from './artistas-detail.component';

describe('ArtistasDetailComponent', () => {
  let component: ArtistasDetailComponent;
  let fixture: ComponentFixture<ArtistasDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistasDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtistasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

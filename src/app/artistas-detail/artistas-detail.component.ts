import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-artistas-detail',
  standalone: true,
  imports: [],
  templateUrl: './artistas-detail.component.html',
  styleUrl: './artistas-detail.component.scss'
})
export class ArtistasDetailComponent {
  data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data);
    
  }
}

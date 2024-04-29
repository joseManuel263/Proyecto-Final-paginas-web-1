import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-musica-detail',
  standalone: true,
  imports: [],
  templateUrl: './musica-detail.component.html',
  styleUrl: './musica-detail.component.scss'
})
export class MusicaDetailComponent {
  data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data);
    
  }
}

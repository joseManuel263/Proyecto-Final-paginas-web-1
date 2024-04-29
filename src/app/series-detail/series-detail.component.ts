import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-series-detail',
  standalone: true,
  imports: [],
  templateUrl: './series-detail.component.html',
  styleUrl: './series-detail.component.scss'
})
export class SeriesDetailComponent {
  data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data);
    
  }
}

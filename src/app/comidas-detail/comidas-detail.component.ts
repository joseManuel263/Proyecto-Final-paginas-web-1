import { Component, inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-comidas-detail',
  standalone: true,
  imports: [],
  templateUrl: './comidas-detail.component.html',
  styleUrl: './comidas-detail.component.scss'
})
export class ComidasDetailComponent {
  data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data);
    
  }
}

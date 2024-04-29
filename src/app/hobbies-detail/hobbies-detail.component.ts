import {Component, inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

@Component({
  selector: 'app-hobbies-detail',
  standalone: true,
  imports: [],
  templateUrl: './hobbies-detail.component.html',
  styleUrl: './hobbies-detail.component.scss'
})
export class HobbiesDetailComponent {
  data: any = inject(MAT_DIALOG_DATA);

  ngOnInit() {
    console.log(this.data);
    
  }
  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

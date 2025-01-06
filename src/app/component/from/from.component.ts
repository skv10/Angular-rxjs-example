import { Component } from '@angular/core';
import { delay, from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-from',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './from.component.html',
  styleUrl: './from.component.scss'
})
export class FromComponent {


  from$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).pipe(delay(2000));

  imageUrl: string = "images/from.png";

  arrOfOutput: number[] = [];


  ngOnInit(): void {
    this.from$.subscribe(res => {
      console.log(res);
      this.arrOfOutput.push(res);
    });
  }
}

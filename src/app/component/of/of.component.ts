import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { delay, interval, of } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-of',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './of.component.html',
  styleUrl: './of.component.scss'
})
export class OfComponent implements OnInit {


  of$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10).pipe(delay(4000));

  imageUrl: string = "";

  arrOfOutput: number[] = [];


  ngOnInit(): void {
    this.of$.subscribe(res => {
      console.log(res);
      this.arrOfOutput.push(res);
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { concat, delay, of } from 'rxjs';

@Component({
  selector: 'app-concat',
  imports: [RouterLink, MatButtonModule],
  templateUrl: './concat.component.html',
  styleUrl: './concat.component.scss'
})
export class ConcatComponent implements OnInit {



  obs1 = of('A', 'B').pipe(delay(1000)); // Emits after 1 second
  obs2 = of('C', 'D');


  imageUrl: string = "images/concat.png";

  arrOfOutput: string[] = [];


  ngOnInit(): void {
    concat(this.obs1, this.obs2).subscribe({
      next: (value) => {
        console.log('Value:', value);
        this.arrOfOutput.push(value);
      },
      complete: () => console.log('Complete'),
    });
  }
}

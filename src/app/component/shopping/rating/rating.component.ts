import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  @Input() rating: number = 0; // Input for the rating value
  stars: number[] = [1, 2, 3, 4, 5]; // Represents 5 stars
}

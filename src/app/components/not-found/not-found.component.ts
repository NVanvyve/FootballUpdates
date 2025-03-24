import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgOptimizedImage} from "@angular/common";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'foot-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.sass'],
  imports: [
    RouterLink,
    NgOptimizedImage,
    MatAnchor,
  ],
  standalone: true
})
export class NotFoundComponent {

}

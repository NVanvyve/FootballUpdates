import {Component} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'foot-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  imports: [
    NgForOf
  ],
  standalone: true
})
export class LoaderComponent {
  protected readonly Array = Array;
}

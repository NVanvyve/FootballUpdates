import {Component} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'foot-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.sass'],
  imports: [
    NgOptimizedImage
  ],
  standalone: true
})
export class LoaderComponent {

}

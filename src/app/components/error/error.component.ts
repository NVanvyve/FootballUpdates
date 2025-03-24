import {Component, OnInit} from '@angular/core';
import {ErrorService} from "../../services/error.service";
import {RouterLink} from "@angular/router";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'foot-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass'],
  imports: [
    MatAnchor,
    RouterLink
  ],
  standalone: true
})
export class ErrorComponent implements OnInit {
  private _error: Error | undefined;

  constructor(private errorService: ErrorService) {
  }

  get errorDescription(): string {
    return this._error?.message || "Unable to retrieve error information"
  }

  ngOnInit(): void {
    this._error = this.errorService.error
  }
}

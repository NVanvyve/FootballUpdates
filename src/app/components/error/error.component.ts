import {Component, OnInit} from '@angular/core';
import {ErrorService} from "../../services/error.service";

@Component({
    selector: 'foot-error',
    templateUrl: './error.component.html',
    styleUrls: ['./error.component.sass'],
    standalone: false
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

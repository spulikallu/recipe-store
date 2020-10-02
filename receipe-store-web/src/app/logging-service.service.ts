import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingServiceService {
  constructor() {}

  logStatus(message: string) {
    console.log(message);
  }

  statusUpdated = new EventEmitter<string>();
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelToDBService {

  constructor() { }

  // function to returns an object (json) which includes all available jobs
  getAvailableJobs() {
    if (this.dbCon()) {
      return 'getAvailableJobs - 01';
    }
  }

  // database connection
  dbCon() {
    return true;
  }
}

import { Component, OnInit } from '@angular/core';
import { ModelToDBService } from '../model-to-db.service';

@Component({
  selector: 'vvv-test-dbmodel',
  templateUrl: './test-dbmodel.component.html',
  styleUrls: ['./test-dbmodel.component.scss']
})
export class TestDBModelComponent implements OnInit {

  result = '';

  constructor(private modelToDBService: ModelToDBService) { }

  ngOnInit() {
    this.result = this.modelToDBService.getAvailableJobs();
  }

}

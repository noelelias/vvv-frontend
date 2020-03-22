import { Component, OnInit } from '@angular/core';
import { StartComponent } from '../start/start.component';

@Component({
  selector: 'app-start-desktop',
  templateUrl: './start-desktop.component.html',
  styleUrls: ['./start-desktop.component.scss'],
})
export class StartDesktopComponent extends StartComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {}

}

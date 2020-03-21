import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vvv-registration-helper',
  templateUrl: './registration-helper.component.html',
  styleUrls: ['./registration-helper.component.scss'],
})
export class RegistrationHelperComponent implements OnInit {

  profilePicture: File;

  constructor() { }

  ngOnInit() {}

}

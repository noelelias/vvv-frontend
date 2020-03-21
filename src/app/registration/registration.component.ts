import {Component, OnInit, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {ApiService} from '../model-to-db.service';

@Component({
  selector: '[vvv-registration]',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  profileType = 'helper';
  email = '';
  password = '';

  constructor(private router: Router, private api: ApiService) {
  }

  ngOnInit() {
  }

  segmentChanged() {
    console.log(this.profileType);
  }

  createProfile() {
    this.api.register(this.email, this.password).subscribe(() => {
      if (this.profileType !== 'helper') {
        this.router.navigate(['/registration/hospital']);
      } else {
        this.router.navigate(['/registration/helper']);
      }
    });
  }
}

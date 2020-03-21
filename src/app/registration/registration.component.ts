import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: '[vvv-registration]',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    profileType = 'helper';

    constructor(private router:Router) {}

	ngOnInit() {}
	
	segmentChanged() {
		console.log(this.profileType);
	}

    createProfile() {
        if (this.profileType !== 'helper') {
			this.router.navigate(['/registration/hospital']);
		} else {
			this.router.navigate(['/registration/helper']);
		}
    }
}

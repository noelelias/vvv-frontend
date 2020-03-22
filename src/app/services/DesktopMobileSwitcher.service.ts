import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StartDesktopComponent } from '../start-desktop/start-desktop.component';
import { RegistrationComponent } from '../registration/registration.component';
import { LoginComponent } from '../login/login.component';
import { RegistrationHospitalComponent } from '../registration-hospital/registration-hospital.component';
import { RegistrationHelperComponent } from '../registration-helper/registration-helper.component';
import { RegistrationConfirmationComponent } from '../registration-confirmation/registration-confirmation.component';
import { CreateJobComponent } from '../create-job/create-job.component';
import { JobsNearMeComponent } from '../jobs-near-me/jobs-near-me.component';
import { JobDetailComponent } from '../job-detail/job-detail.component';
import { StartComponent } from '../start/start.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesktopMobileSwitcherService {
  isDesktop:Subject<boolean> = new Subject();
  constructor(private router: Router) {}

  switchToDesktop() {
		this.isDesktop.next(true);
		this.router.config = [
			{ path: '', component: StartDesktopComponent },
			{ path: 'registration', component: RegistrationComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'registration/helper', component: RegistrationHelperComponent },
			{ path: 'registration/hospital', component: RegistrationHospitalComponent },
			{ path: 'registration/confirmation', component: RegistrationConfirmationComponent },
			{ path: 'create/job', component: CreateJobComponent },
			{ path: 'jobs/near-me', component: JobsNearMeComponent },
			{ path: 'job/detail', component: JobDetailComponent }
		];
	}

	switchToMobile() {
		this.isDesktop.next(false);
		this.router.config = [
			{ path: '', component: StartComponent },
			{ path: 'registration', component: RegistrationComponent },
			{ path: 'login', component: LoginComponent },
			{ path: 'registration/helper', component: RegistrationHelperComponent },
			{ path: 'registration/hospital', component: RegistrationHospitalComponent },
			{ path: 'registration/confirmation', component: RegistrationConfirmationComponent },
			{ path: 'create/job', component: CreateJobComponent },
			{ path: 'jobs/near-me', component: JobsNearMeComponent },
			{ path: 'job/detail', component: JobDetailComponent }
		];
	}
}

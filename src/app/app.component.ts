import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { StartDesktopComponent } from './start-desktop/start-desktop.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { RegistrationHospitalComponent } from './registration-hospital/registration-hospital.component';
import { RegistrationHelperComponent } from './registration-helper/registration-helper.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobsNearMeComponent } from './jobs-near-me/jobs-near-me.component';
import { JobDetailComponent } from './job-detail/job-detail.component';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    isDesktop = false;

    constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private router: Router) {
        this.initializeApp();
    }

    initializeApp() {
		if (screen.width > 900 && !/Mobi/.test(navigator.userAgent)) {
			this.isDesktop = true;
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
        this.platform.ready().then(() => {
            
        });
    }

    ngOnInit() {}
}

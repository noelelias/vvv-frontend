import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes, Router } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { StartComponent } from './start/start.component';
import { LoginComponent } from './login/login.component';
import { RegistrationHelperComponent } from './registration-helper/registration-helper.component';

import { ngfModule } from 'angular-file';
import { FormsModule } from '@angular/forms';
import { RegistrationHospitalComponent } from './registration-hospital/registration-hospital.component';
import { RegistrationConfirmationComponent } from './registration-confirmation/registration-confirmation.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { JobsNearMeComponent } from './jobs-near-me/jobs-near-me.component';
import { JobComponent } from './job/job.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageDesktopComponent } from './page-desktop/page-desktop.component';
import { StartDesktopComponent } from './start-desktop/start-desktop.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

const appRoutes: Routes = [
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

@NgModule({
    declarations: [AppComponent, RegistrationComponent, PageComponent, ContentComponent, StartComponent, LoginComponent, RegistrationHelperComponent, RegistrationHospitalComponent, RegistrationConfirmationComponent, CreateJobComponent, JobsNearMeComponent, JobComponent, JobDetailComponent, PageDesktopComponent, StartDesktopComponent],
    entryComponents: [JobComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        IonicModule.forRoot({
            mode: 'ios'
        }),
        AppRoutingModule,
        RouterModule.forRoot(appRoutes),
        ngfModule,
        FormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatCardModule
    ],
    providers: [StatusBar, SplashScreen, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
    }
}

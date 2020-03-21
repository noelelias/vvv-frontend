import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

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

import { ngfModule } from "angular-file";

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration/helpers', component: RegistrationHelperComponent }
];

@NgModule({
  declarations: [AppComponent, RegistrationComponent, PageComponent, ContentComponent, StartComponent, LoginComponent, RegistrationHelperComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    ngfModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

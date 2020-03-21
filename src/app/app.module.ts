import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './forms/registration/registration.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { StartComponent } from './start/start.component';

const appRoutes: Routes = [
  { path: '', component: StartComponent },
  { path: 'registration', component: RegistrationComponent }
];

@NgModule({
  declarations: [AppComponent, RegistrationComponent, PageComponent, ContentComponent, StartComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DesktopMobileSwitcherService } from './services/DesktopMobileSwitcher.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    isDesktop;

	constructor(private platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, private DesktopMobileSwitcherService: DesktopMobileSwitcherService) {
		this.initializeApp();
    }

    initializeApp() {
		this.DesktopMobileSwitcherService.isDesktop.subscribe(val=>{
			this.isDesktop = val;
		});
		if (screen.width > 900 && !/Mobi/.test(navigator.userAgent)) {
			this.DesktopMobileSwitcherService.switchToDesktop();
		} else {
			this.DesktopMobileSwitcherService.switchToMobile();
		}
        this.platform.ready().then(() => {
            
        });
	}
	
    ngOnInit() {}
}

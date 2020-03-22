import { Component, OnInit } from '@angular/core';
import { DesktopMobileSwitcherService } from '../services/DesktopMobileSwitcher.service';

@Component({
    selector: 'vvv-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private DesktopMobileSwitcherService: DesktopMobileSwitcherService) {
        this.DesktopMobileSwitcherService.switchToMobile();
    }

    ngOnInit() {}
}

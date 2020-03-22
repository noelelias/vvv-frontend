import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/ApiService';
import { UserService } from '../services/UserService';
import { User } from '../models/User';
import { toastController } from '@ionic/core';
import { DesktopMobileSwitcherService } from '../services/DesktopMobileSwitcher.service';

@Component({
    selector: '[vvv-registration]',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
    form = {
        email: '',
        password: '',
        profileType: 'helper',
        tos: false,
        privacy: false
    };

    constructor(private router: Router, private api: ApiService, private userService: UserService, private DesktopMobileSwitcherService: DesktopMobileSwitcherService) {
        this.DesktopMobileSwitcherService.switchToMobile(); // no desktop support
    }

    ngOnInit() {}

    validate() {
        if (this.form.tos && this.form.privacy) return true;
        else {
			toastController.create({message: 'Bitte akzeptieren Sie die AGB\'s und Datenschutzbestimmungen'}).then(toast=>toast.present());
            return false;
        }
    }

    createProfile() {
        if (!this.validate()) return;

        this.api.register(this.form.email, this.form.password).subscribe((user: User) => {
            this.userService.current = user;
            if (this.form.profileType !== 'helper') {
                this.router.navigate(['/registration/hospital']);
            } else {
                this.router.navigate(['/registration/helper']);
            }
        });
    }
}

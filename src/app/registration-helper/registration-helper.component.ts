import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import {IonSlides} from '@ionic/angular';
import {Institution} from '../models/Institution';
import {Volunteer} from '../models/Volunteer';
import { ApiService } from '../services/ApiService';
import { timeInterval } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from '../services/UserService';
import { VolunteerService } from '../services/VolunteerService';
import { User } from '../models/User';


@Component({
    selector: 'vvv-registration-helper',
    templateUrl: './registration-helper.component.html',
    styleUrls: ['./registration-helper.component.scss']
})
export class RegistrationHelperComponent implements OnInit {
    form = {
        time_from: '',
        time_to: '',
        radius: 0,
        postal_code: '',
        drivinglicense: '',
        medical_experience: '',
        firstname: '',
        lastname: '',
        phone: '',
        freetext: ''
    };

    @ViewChild('profilePictureImg')
    profilePictureImg;

    @ViewChild('slider')
    slides: IonSlides;

    constructor(private api: ApiService, private router: Router, private volunteerService: VolunteerService, private userService: UserService) {}

    ngOnInit() {}

    profilePicture(e) {
        let inputValue = e.target;
        var file:File = inputValue.files[0];
        var myReader:FileReader = new FileReader();

        myReader.onloadend = (e) => {
            this.profilePictureImg.nativeElement.setAttribute('src', myReader.result as string);
        }

        myReader.readAsDataURL(file);
    }

    openFileSelector() {
        (document.querySelector('.profile-picture-selector') as HTMLElement).click();
    }

    nextSlide() {
        this.slides.slideNext();
    }

    updateProfile() {
        this.api.registerHelper(this.form.time_from, this.form.time_to, this.form.radius, this.form.postal_code, this.form.drivinglicense, parseInt(this.form.medical_experience)).subscribe((volunteer: string) => {
            this.volunteerService.current = JSON.parse(volunteer) as Volunteer;
            this.api.extendRegister(this.form.firstname, this.form.lastname).subscribe((user: string) => {
                this.userService.current = JSON.parse(user) as User;
                this.router.navigate(['/registration/confirmation']);
            });
        });
    }
}

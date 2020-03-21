import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';
import {IonSlides} from '@ionic/angular';
import {Institution} from '../models/Institution';
import {Volunteer} from '../models/Volunteer';


@Component({
    selector: 'vvv-registration-helper',
    templateUrl: './registration-helper.component.html',
    styleUrls: ['./registration-helper.component.scss']
})
export class RegistrationHelperComponent implements OnInit {
    formData: any;

    volunteer = new Volunteer();

    @ViewChild('profilePictureImg', {static: false})
    profilePictureImg;

    @ViewChild('slider', {static: false})
    slides: IonSlides;

    constructor() {}

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
}

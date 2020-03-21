import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.scss'],
})
export class CreateJobComponent implements OnInit {

  @ViewChild('slider', {static: false})
  slides: IonSlides;

  constructor() { }

  ngOnInit() {}

  nextSlide() {
    this.slides.slideNext();
  }
}

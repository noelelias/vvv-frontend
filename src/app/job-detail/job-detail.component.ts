import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'vvv-job-detail',
    templateUrl: './job-detail.component.html',
    styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
    institute = 'kein Institut angegeben';
    location = 'kein Standort angegeben';
    jobTitle = 'kein Job Title angegeben';
    jobDescription = 'keine Job Beschreibung angegeben';
    dateFrom = 'kein datum vom angegeben';
    dateTo = 'kein datum bis angegeben';
    medicalExperience = 'kein medizinischer Hintergrund angegeben';

    constructor(private _location: Location, private route: ActivatedRoute) {
        const rd = this.route.snapshot.data;
        if (Object.entries(rd).length > 0) {
            this.institute = rd.institute;
            this.location = rd.location;
            this.jobTitle = rd.jobTitle;
            this.jobDescription = rd.jobDescription;
            this.dateFrom = rd.dateFrom;
            this.dateTo = rd.dateTo;
            this.medicalExperience = rd.medicalExperience;
        }
    }

    ngOnInit() {}
}

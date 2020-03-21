import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'vvv-job',
    templateUrl: './job.component.html',
    styleUrls: ['./job.component.scss']
})
export class JobComponent implements OnInit {
    @Input()
    dateFrom = '';

    @Input()
    dateTo = '';

    @Input()
    jobTitle = '';

    @Input()
    jobDescription = '';

    @Input()
    distance = '';
    @Input()
    medicalExperience = '';

    constructor(private router: Router) {}

    ngOnInit() {}

    showDetail() {
		let routePath = 'job/detail';
		let route = this.router.config.find(r => r.path === routePath);
		route.data = {institute: 'test institute', location: 'test location', jobTitle:this.jobTitle, jobDescription: this.jobDescription, dateFrom: this.dateFrom, dateTo: this.dateTo, medicalExperience: this.medicalExperience};
		this.router.navigateByUrl(routePath);
        //this.router.navigateByUrl('/job/detail', { state: {institute: 'test institute', location: 'test location', jobTitle:this.jobTitle, jobDescription: this.jobDescription, dateFrom: this.dateFrom, dateTo: this.dateTo, medicalExperience: this.medicalExperience} });
    }
}

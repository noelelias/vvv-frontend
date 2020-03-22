import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { JobComponent } from '../job/job.component';
import { async, timeout } from 'q';

@Component({
    selector: 'vvv-jobs-near-me',
    templateUrl: './jobs-near-me.component.html',
    styleUrls: ['./jobs-near-me.component.scss']
})
export class JobsNearMeComponent implements OnInit {
	@ViewChild('jobs', { read: ViewContainerRef })
	jobs: ViewContainerRef

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

    ngOnInit() {}

    loadJobs(e) {
		(async () => {
			await new Promise(resolve => setTimeout(resolve, 750));;
			const componentFactory = this.componentFactoryResolver.resolveComponentFactory(JobComponent);
			for (let i = 0; i < 10; i++) {
				this.jobs.createComponent(componentFactory);
			}
			e.target.complete();
		})();
    }
}

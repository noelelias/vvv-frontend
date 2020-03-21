import {
    Component,
    OnInit,
    ViewChild,
    ViewContainerRef,
    Directive
} from '@angular/core';

@Directive({
    selector: '[vvv-content]'
})
export class ContentComponent implements OnInit {
    constructor(private viewContainerRef: ViewContainerRef) {}

    ngOnInit() {
		const el = this.viewContainerRef.element.nativeElement;
		const parent = el.parentNode;
		while (el.firstChild) parent.insertBefore(el.firstChild, el);
		parent.removeChild(el);
	}
}

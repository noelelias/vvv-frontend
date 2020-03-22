import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../page/page.component';
import { DesktopMobileSwitcherService } from '../services/DesktopMobileSwitcher.service';

@Component({
  selector: 'app-page-desktop',
  templateUrl: './page-desktop.component.html',
  styleUrls: ['./page-desktop.component.scss'],
})
export class PageDesktopComponent extends PageComponent implements OnInit {

  constructor(DesktopMobileSwitcherService: DesktopMobileSwitcherService) {
    super();
    DesktopMobileSwitcherService.switchToDesktop();
  }

  ngOnInit() {}

}

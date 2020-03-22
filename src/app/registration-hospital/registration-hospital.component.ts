import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSlides} from '@ionic/angular';
import {Institution} from '../models/Institution';
import {ApiService} from '../services/ApiService';
import {Router} from '@angular/router';
import {UserService} from '../services/UserService';
import {InstitutionService} from '../services/InstitutionService';

@Component({
  selector: 'app-registration-hospital',
  templateUrl: './registration-hospital.component.html',
  styleUrls: ['./registration-hospital.component.scss'],
})
export class RegistrationHospitalComponent implements OnInit {

  institution;

  constructor(private api: ApiService, private router: Router, private userService: UserService, private institutionService: InstitutionService) {
  }

  ngOnInit() {
    this.institution = new Institution(this.userService.current);
  }

  save() {
    this.api.post('endpoints/institutionProfile/create.php', this.institution).subscribe((inst: string) => {
      this.institutionService.current = JSON.parse(inst) as Institution;
      this.router.navigate(['/registration/confirmation']);
    });
  }
}

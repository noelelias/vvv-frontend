import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

abstract class ApiModel {
  static ENDPOINT_PATH = '';
}

export class User extends ApiModel {
  private surname: string;
  private forename: string;
  private email: string;
}

export class Volunteer extends User {
  static ENDPOINT_PATH = '/endpoints/volunteer';

  private date_form: Date;
  private date_to: Date;
  private time_from: number;
  private time_to: number;
  private radius: number;
  private driving_license: boolean;
  private medical_experience: number;

}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  get(url: string) {
    return this.http.get(environment.apiBase + url);
  }

  post(url: string, body: any) {
    return this.http.post(environment.apiBase + url, body);
  }

  login(email: string, password: string) {
    return this.post('endpoints/auth/login.php', {email, pass: password});
  }

  register(email: string, password: string) {
    return this.post('endpoints/auth/register.php', {email, pass: password});
  }

}

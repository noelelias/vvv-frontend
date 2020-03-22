import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

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
    return this.post('https://api.volunteervsvirus.de/endpoints/auth/login.php', {email, pass: password});
  }

  register(email: string, password: string) {
    return this.post('https://api.volunteervsvirus.de/endpoints/auth/register.php', {email, pass: password});
  }

}

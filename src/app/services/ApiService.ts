import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { toastController } from '@ionic/core';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private http: HttpClient) {}

    get(url: string) {
        return this.http.get(environment.apiBase + url);
    }

    post(url: string, body: any) {
		const returnObservable = this.http.post(environment.apiBase + url, body, {responseType: 'text'}).pipe(catchError( (err, caght) => {
                console.log(err);
				toastController.create({message: JSON.parse(err?.error)?.messages?.join(' - '), duration: 1000}).then(toast=>toast.present());
				return throwError(err);
			}
        ));
        return returnObservable;
    }

    login(email: string, password: string) {
        return this.post('endpoints/auth/login.php', { email, pass: password });
    }

    register(email: string, password: string) {
        return this.post('endpoints/auth/register.php', { email, pass: password });
    }

    registerHelper(time_from: string, time_to: string, radius: number, postal_code: string, drivinglicense: string, medical_experience: number) {
        return this.post('endpoints/volunteerProfile/create.php', { 'time_from':time_from, 'time_to':time_to, 'radius':radius, 'postal_code': postal_code, 'drivinglicense':drivinglicense, 'medical_experience':medical_experience });
    }

    extendRegister(forename: string, surname: string) {
        return this.post('endpoints/auth/register.php', { 'forename': forename, 'surname': surname });
    }
}
